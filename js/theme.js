/* ============================================
   Theme Toggle - Dark/Light Mode
   ============================================ */

const ThemeManager = {
    // Initialize theme on page load
    init() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.htmlElement = document.documentElement;

        // Get saved theme or detect system preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Set initial theme
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        this.setTheme(initialTheme, false);

        // Bind events
        this.bindEvents();
    },

    // Bind event listeners
    bindEvents() {
        // Toggle button click
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggle());
        }

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set preference
            if (!localStorage.getItem('portfolio-theme')) {
                this.setTheme(e.matches ? 'dark' : 'light', true);
            }
        });
    },

    // Toggle between light and dark
    toggle() {
        const currentTheme = this.htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme, true);
    },

    // Set theme
    setTheme(theme, animate = true) {
        // Add transition class for smooth color change
        if (animate) {
            this.htmlElement.classList.add('theme-transitioning');
        }

        // Set theme attribute
        this.htmlElement.setAttribute('data-theme', theme);

        // Save to localStorage
        localStorage.setItem('portfolio-theme', theme);

        // Update toggle button icon
        this.updateToggleIcon(theme);

        // Remove transition class after animation
        if (animate) {
            setTimeout(() => {
                this.htmlElement.classList.remove('theme-transitioning');
            }, 300);
        }

        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    },

    // Update toggle button icon
    updateToggleIcon(theme) {
        if (!this.themeToggle) return;

        const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

        const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

        this.themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
        this.themeToggle.setAttribute('aria-label',
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );
    },

    // Get current theme
    getCurrentTheme() {
        return this.htmlElement.getAttribute('data-theme') || 'dark';
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});
