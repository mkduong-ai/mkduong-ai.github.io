// Ensure KaTeX is loaded dynamically
async function ensureKatex() {
    if (!window.katex) {
        // Load KaTeX CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
        document.head.appendChild(link);

        // Load KaTeX JS
        const katexModule = await import('https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.mjs');
        window.katex = katexModule.default;
    }
    return window.katex;
}

// Render markdown using marked.js library with KaTeX math pre-processing
export async function renderMarkdownWithMarked(markdown, options = {}) {
    const { assetBaseUrl = '' } = options;
    try {
        const [{ marked }, katex] = await Promise.all([
            import('https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js'),
            ensureKatex().catch(err => {
                console.warn('KaTeX failed to load:', err);
                return null;
            })
        ]);

        // Configure marked options with responsive image and external link renderer
        const renderer = new marked.Renderer();
        renderer.image = (arg1, title, text) => {
            let href = arg1;
            let alt = text;
            if (typeof arg1 === 'object' && arg1 !== null) {
                href = arg1.href;
                alt = arg1.text || '';
            }
            return `<img src="${href}" alt="${alt || ''}" class="responsive-img" style="max-width: 100%; height: auto; display: block; margin: 30px auto; border-radius: 6px;">`;
        };

        renderer.link = (arg1, title, text) => {
            let href = arg1;
            let titleAttr = title ? ` title="${title}"` : '';
            let linkText = text;
            if (typeof arg1 === 'object' && arg1 !== null) {
                href = arg1.href;
                titleAttr = arg1.title ? ` title="${arg1.title}"` : '';
                linkText = arg1.text || '';
            }
            const isExternal = /^https?:\/\//i.test(href);
            const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
            return `<a href="${href}"${titleAttr}${targetAttr}>${linkText}</a>`;
        };

        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false,
            renderer: renderer
        });

        // Resolve relative image paths if assetBaseUrl is provided
        let processedMarkdown = markdown;
        if (assetBaseUrl) {
            processedMarkdown = processedMarkdown.replace(/!\[([^\]]*)\]\((?!(?:https?:|\/|data:|\.\.\/))([^)]+)\)/g, (match, alt, src) => {
                const cleanSrc = src.startsWith('./') ? src.substring(2) : src;
                return `![${alt}](${assetBaseUrl}${cleanSrc})`;
            });
        }

        if (!katex) {
            return marked.parse(processedMarkdown);
        }

        const mathPlaceholders = [];

        // 1. Extract and pre-render display math ($$...$$) before marked parses backslashes
        processedMarkdown = processedMarkdown.replace(/\$\$([\s\S]+?)\$\$/g, (match, equation) => {
            try {
                const rendered = katex.renderToString(equation.trim(), {
                    displayMode: true,
                    throwOnError: false
                });
                const placeholder = `KATEXPLACEHOLDERDISPLAY${mathPlaceholders.length}XYZ`;
                mathPlaceholders.push({ placeholder, rendered });
                return `\n\n${placeholder}\n\n`;
            } catch (e) {
                console.error('KaTeX display math error:', e);
                return match;
            }
        });

        // 2. Extract and pre-render inline math ($...$)
        processedMarkdown = processedMarkdown.replace(/\$([^\$\n]+?)\$/g, (match, equation) => {
            try {
                const rendered = katex.renderToString(equation.trim(), {
                    displayMode: false,
                    throwOnError: false
                });
                const placeholder = `KATEXPLACEHOLDERINLINE${mathPlaceholders.length}XYZ`;
                mathPlaceholders.push({ placeholder, rendered });
                return placeholder;
            } catch (e) {
                console.error('KaTeX inline math error:', e);
                return match;
            }
        });

        // 3. Parse markdown into HTML
        let html = marked.parse(processedMarkdown);

        // 4. Substitute rendered KaTeX math back into the HTML safely using a replacer function
        for (const { placeholder, rendered } of mathPlaceholders) {
            html = html.replaceAll(placeholder, () => rendered);
        }

        return html;
    } catch (error) {
        console.warn('Marked.js failed to load, falling back to basic renderer:', error);
        return renderMarkdown(markdown);
    }
}

// Simple fallback renderer if marked.js fails
export function renderMarkdown(markdown, options = {}) {
    const { assetBaseUrl = '' } = options;
    let html = markdown;

    // Resolve relative image paths if assetBaseUrl is provided
    if (assetBaseUrl) {
        html = html.replace(/!\[([^\]]*)\]\((?!(?:https?:|\/|data:|\.\.\/))([^)]+)\)/g, (match, alt, src) => {
            const cleanSrc = src.startsWith('./') ? src.substring(2) : src;
            return `![${alt}](${assetBaseUrl}${cleanSrc})`;
        });
    }

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="responsive-img">');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, (match, text, href) => {
        const isExternal = /^https?:\/\//i.test(href);
        const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${href}"${targetAttr}>${text}</a>`;
    });

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (!para.match(/^<[h|ul|pre]/)) {
            return `<p>${para}</p>`;
        }
        return para;
    }).join('\n');

    return html;
}
