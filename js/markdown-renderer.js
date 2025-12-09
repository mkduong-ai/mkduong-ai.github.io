// Render markdown using marked.js library (with fallback to basic renderer)
export async function renderMarkdownWithMarked(markdown) {
    try {
        // Try to use marked.js from CDN
        const { marked } = await import('https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js');

        // Configure marked for better code highlighting
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        // Parse markdown to HTML
        let html = marked.parse(markdown);

        // Render LaTeX equations using KaTeX
        html = await renderLatexEquations(html);

        return html;
    } catch (error) {
        console.warn('Marked.js failed to load, falling back to basic renderer:', error);
        return renderMarkdown(markdown);
    }
}// Render LaTeX equations using KaTeX

export async function renderLatexEquations(html) {
    try {
        // Load KaTeX dynamically
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

        // Replace display math ($$...$$)
        html = html.replace(/\$\$([\s\S]+?)\$\$/g, (match, equation) => {
            try {
                return window.katex.renderToString(equation.trim(), {
                    displayMode: true,
                    throwOnError: false
                });
            } catch (e) {
                console.error('KaTeX display math error:', e);
                return match;
            }
        });

        // Replace inline math ($...$)
        html = html.replace(/\$([^\$\n]+?)\$/g, (match, equation) => {
            try {
                return window.katex.renderToString(equation.trim(), {
                    displayMode: false,
                    throwOnError: false
                });
            } catch (e) {
                console.error('KaTeX inline math error:', e);
                return match;
            }
        });

        return html;
    } catch (error) {
        console.warn('KaTeX failed to load, equations will not be rendered:', error);
        return html;
    }
}
// Simple markdown renderer (basic support) - FALLBACK ONLY

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

