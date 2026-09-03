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
export async function renderMarkdownWithMarked(markdown) {
    try {
        const [{ marked }, katex] = await Promise.all([
            import('https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js'),
            ensureKatex().catch(err => {
                console.warn('KaTeX failed to load:', err);
                return null;
            })
        ]);

        // Configure marked options
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        if (!katex) {
            return marked.parse(markdown);
        }

        const mathPlaceholders = [];

        // 1. Extract and pre-render display math ($$...$$) before marked parses backslashes
        let processedMarkdown = markdown.replace(/\$\$([\s\S]+?)\$\$/g, (match, equation) => {
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
export function renderMarkdown(markdown) {
    let html = markdown;

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

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');

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
