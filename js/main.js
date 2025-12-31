/* ============================================
   Main Application Script
   Portfolio Website for Yousry Essam Ayoub
   ============================================ */

// Main App Controller
const App = {
    // Initialize application
    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupSkillsTabs();
        this.setupContactForm();
        this.setupScrollToTop();
        this.setupSmoothScroll();

        // Log initialization
        console.log('Portfolio initialized successfully!');
    },

    // Setup navigation
    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navOverlay = document.querySelector('.nav-overlay');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                navOverlay?.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
        }

        // Close menu on overlay click
        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                navToggle?.classList.remove('active');
                navMenu?.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        }

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle?.classList.remove('active');
                navMenu?.classList.remove('active');
                navOverlay?.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Active link highlighting
        this.setupActiveNavLink();
    },

    // Setup active nav link based on scroll position
    setupActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const highlightNav = () => {
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightNav, { passive: true });
        highlightNav(); // Run on init
    },

    // Setup scroll effects (navbar background)
    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');

        if (!navbar) return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run on init
    },

    // Setup skills tabs
    setupSkillsTabs() {
        const tabs = document.querySelectorAll('.skill-tab');
        const contents = document.querySelectorAll('.skills-content');

        if (tabs.length === 0) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show corresponding content
                contents.forEach(content => {
                    content.classList.remove('active');
                    if (content.getAttribute('data-content') === target) {
                        content.classList.add('active');

                        // Re-trigger progress bar animations
                        const progressBars = content.querySelectorAll('.progress-fill');
                        progressBars.forEach(bar => {
                            const progress = bar.getAttribute('data-progress');
                            bar.style.width = '0%';
                            setTimeout(() => {
                                bar.style.width = progress + '%';
                            }, 50);
                        });
                    }
                });
            });
        });
    },

    // Setup contact form
    setupContactForm() {
        const form = document.getElementById('contact-form');

        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('.form-submit');
            const originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate form submission (replace with actual API call)
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Success
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--success-500)';
                form.reset();

                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);

            } catch (error) {
                // Error handling
                submitBtn.textContent = 'Error! Try again';
                submitBtn.style.background = '#ef4444';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    },

    // Setup scroll to top button
    setupScrollToTop() {
        const scrollTopBtn = document.querySelector('.scroll-top');

        if (!scrollTopBtn) return;

        // Show/hide button based on scroll position
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        // Scroll to top on click
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    // Setup smooth scroll for anchor links
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();

    // Initialize enhanced interactions
    setupScrollProgress();
    setupMagneticHover();
    setup3DTilt();
});

// Add loading complete class after page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/* ============================================
   Scroll Progress Indicator
   ============================================ */
function setupScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
    document.body.appendChild(progressBar);

    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(99, 102, 241, 0.1);
            z-index: 9999;
        }
        .scroll-progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, 
                var(--primary-500), 
                var(--secondary-500), 
                var(--accent-500));
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);

    // Update progress on scroll
    const fill = progressBar.querySelector('.scroll-progress-fill');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        fill.style.width = `${progress}%`;
    }, { passive: true });
}

/* ============================================
   Magnetic Hover Effect for Buttons
   ============================================ */
function setupMagneticHover() {
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .social-link');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Apply a subtle magnetic pull effect
            el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ============================================
   3D Tilt Effect for Project Cards
   ============================================ */
function setup3DTilt() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateY(-10px)
                scale(1.02)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
