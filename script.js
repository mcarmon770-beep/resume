document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Helpers
    // =========================
    const $ = (selector) => document.querySelectorAll(selector);

    // =========================
    // 1. Reveal animations
    // =========================
    function initRevealAnimation() {
        const elements = $('.reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 60);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => observer.observe(el));
    }

    // =========================
    // 2. Skills animation
    // =========================
    function initSkillsAnimation() {
        const fills = $('.fill');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute("data-width");
                    if (width) {
                        entry.target.style.width = width;
                    }
                }
            });
        }, { threshold: 0.5 });

        fills.forEach(fill => observer.observe(fill));
    }

    // =========================
    // 3. Active navigation
    // =========================
    function initActiveNavigation() {
        const sections = $('section');
        const navLinks = $('.navbar a');

        window.addEventListener("scroll", () => {
            let currentSection = "";

            sections.forEach(section => {
                const offset = section.offsetTop;
                if (window.scrollY >= offset - 120) {
                    currentSection = section.id;
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentSection}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    // =========================
    // Init all
    // =========================
    function init() {
        initRevealAnimation();
        initSkillsAnimation();
        initActiveNavigation();
    }

    init();
});