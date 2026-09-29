// Smooth Scroll Module

export function scrollToHash(hash, smooth = true) {
    if (!hash || hash === '#') return;
    try {
        const target = document.querySelector(hash) || document.querySelector(hash + '-section');
        if (target) {
            const navOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: smooth ? 'smooth' : 'auto'
            });
        }
    } catch (e) {
        console.error('Invalid selector for scroll:', hash);
    }
}

export function initSmoothScroll() {
    // Disable automatic browser scroll restoration to prevent fighting hash scrolling on dynamically loaded DOM
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            if (hash && hash !== '#') {
                const target = document.querySelector(hash) || document.querySelector(hash + '-section');
                if (target) {
                    e.preventDefault();
                    scrollToHash(hash, true);
                    history.pushState(null, null, hash);
                }
            }
        });
    });

    // Listen for hashchange events
    window.addEventListener('hashchange', () => {
        scrollToHash(window.location.hash, true);
    });

    // Handle hash on initial page load after dynamic components have loaded
    if (window.location.hash) {
        const hash = window.location.hash;
        // Immediate scroll to target position
        scrollToHash(hash, false);

        // Adjust scroll position after images and dynamic carousels adjust layout
        setTimeout(() => {
            scrollToHash(hash, true);
        }, 150);

        setTimeout(() => {
            scrollToHash(hash, true);
        }, 450);

        window.addEventListener('load', () => {
            scrollToHash(hash, true);
        }, { once: true });
    }
}
