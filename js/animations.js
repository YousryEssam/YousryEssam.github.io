/* ============================================
   Scroll Animations - Intersection Observer
   ============================================ */

const AnimationManager = {
    // Initialize animations
    init() {
        this.setupRevealAnimations();
        this.setupCounterAnimations();
        this.setupProgressBars();
        this.setupParallax();
    },

    // Setup reveal animations for elements
    setupRevealAnimations() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');

        if (revealElements.length === 0) return;

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Unobserve after animation
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    },

    // Setup counter animations for stats
    setupCounterAnimations() {
        const counters = document.querySelectorAll('[data-count]');

        if (counters.length === 0) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, {
            threshold: 0.5
        });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    },

    // Animate a counter element
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'), 10);
        const duration = 2000; // 2 seconds
        const start = 0;
        const startTime = performance.now();
        const suffix = element.getAttribute('data-suffix') || '';
        const prefix = element.getAttribute('data-prefix') || '';

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-cubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(start + (target - start) * easeProgress);
            element.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    },

    // Setup progress bar animations
    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');

        if (progressBars.length === 0) return;

        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const targetWidth = entry.target.getAttribute('data-progress') || '0';
                    entry.target.style.width = targetWidth + '%';
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.3
        });

        progressBars.forEach(bar => {
            // Set initial width to 0
            bar.style.width = '0%';
            progressObserver.observe(bar);
        });
    },

    // Setup parallax effects
    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        let ticking = false;

        const updateParallax = () => {
            const scrollY = window.scrollY;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
                const yPos = -(scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    },

    // Typed text animation
    typeText(element, text, speed = 50) {
        return new Promise((resolve) => {
            let index = 0;
            element.textContent = '';

            const type = () => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            };

            type();
        });
    },

    // Cycle through multiple texts (for hero subtitle)
    async cycleTexts(element, texts, options = {}) {
        const {
            typeSpeed = 50,
            deleteSpeed = 30,
            pauseTime = 2000
        } = options;

        let index = 0;

        while (true) {
            // Type text
            await this.typeText(element, texts[index], typeSpeed);

            // Pause
            await new Promise(resolve => setTimeout(resolve, pauseTime));

            // Delete text
            const currentText = element.textContent;
            for (let i = currentText.length; i >= 0; i--) {
                element.textContent = currentText.substring(0, i);
                await new Promise(resolve => setTimeout(resolve, deleteSpeed));
            }

            // Move to next text
            index = (index + 1) % texts.length;

            // Small pause before next text
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    AnimationManager.init();
});
