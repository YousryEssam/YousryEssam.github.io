/* ============================================
   Language System - i18n with RTL Support
   ============================================ */

const LanguageManager = {
    currentLang: 'en',

    // Initialize language system
    init() {
        this.langToggle = document.getElementById('lang-toggle');
        this.htmlElement = document.documentElement;

        // Get saved language or detect browser language
        const savedLang = localStorage.getItem('portfolio-lang');
        const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';

        // Set initial language
        const initialLang = savedLang || browserLang;
        this.setLanguage(initialLang, false);

        // Bind events
        this.bindEvents();
    },

    // Bind event listeners
    bindEvents() {
        if (this.langToggle) {
            this.langToggle.addEventListener('click', () => this.toggle());
        }
    },

    // Toggle between English and Arabic
    toggle() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.setLanguage(newLang, true);
    },

    // Set language
    setLanguage(lang, animate = true) {
        this.currentLang = lang;

        // Add transition class for smooth change
        if (animate) {
            document.body.classList.add('lang-transitioning');
        }

        // Set language and direction attributes
        this.htmlElement.setAttribute('lang', lang);
        this.htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Save to localStorage
        localStorage.setItem('portfolio-lang', lang);

        // Update toggle button
        this.updateToggleButton(lang);

        // Translate all elements
        this.translatePage();

        // Remove transition class
        if (animate) {
            setTimeout(() => {
                document.body.classList.remove('lang-transitioning');
            }, 300);
        }

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    },

    // Update toggle button
    updateToggleButton(lang) {
        if (!this.langToggle) return;

        this.langToggle.textContent = lang === 'en' ? 'عربي' : 'EN';
        this.langToggle.setAttribute('aria-label',
            lang === 'en' ? 'Switch to Arabic' : 'Switch to English'
        );
    },

    // Translate all elements on the page
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (translation) {
                // Check if it's an input placeholder
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translation);
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate elements with HTML content
        const htmlElements = document.querySelectorAll('[data-i18n-html]');
        htmlElements.forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const translation = this.getTranslation(key);
            if (translation) {
                el.innerHTML = translation;
            }
        });
    },

    // Get translation by dot-notation key
    getTranslation(key) {
        if (!translations || !translations[this.currentLang]) {
            console.warn('Translations not loaded');
            return null;
        }

        const keys = key.split('.');
        let value = translations[this.currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Translation not found for key: ${key}`);
                return null;
            }
        }

        return typeof value === 'string' ? value : null;
    },

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    },

    // Check if RTL
    isRTL() {
        return this.currentLang === 'ar';
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
});
