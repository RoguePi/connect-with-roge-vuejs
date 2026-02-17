const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Define routes
const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact },
    { path: '/privacy', component: Privacy }
];

// Create router
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// Main App component
const App = {
    template: `
        <div class="app">
            <div class="particles">
                <div class="particle" v-for="n in 10" :key="n"></div>
            </div>
            <Navbar />
            <main class="main-content">
                <router-view />
            </main>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-left">
                        <p>&copy; 2024 Rogelyn Pizon. Built with Vue.js</p>
                        <div class="legal-links">
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=162b211b-1872-4580-831e-c8abb42cf0a7" data-termly-policy="cookie-policy" >Cookie Policy</a>
                            <a name="Footer link" class="framer-SoxLP framer-uowxp framer-1dxns1x framer-v-1dxns1x framer-16ja16o" href="#/privacy" style="width: 100%; opacity: 1;" data-framer-name="Footer Link"><div class="framer-15dbu5v" data-framer-name="Footer Text" data-framer-component-type="RichTextContainer" style="--extracted-r6o4lv: var(--token-98ef78d6-0770-4942-82f9-2c2cb5a2c2ed, rgb(64, 64, 64)); opacity: 0.75; transform: none; will-change: transform;"><p class="framer-text framer-styles-preset-csnn3d" data-styles-preset="k1y7EeG6k" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-98ef78d6-0770-4942-82f9-2c2cb5a2c2ed, rgb(64, 64, 64)));">Privacy Policy</p></div></a>
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=0dba82c5-dcfd-4b57-88f5-3e3187a9375d" data-termly-policy="terms-of-service">Terms of Service</a>
                            <a href="#" class="termly-display-preferences">Consent Preferences</a>
                            <a
  href="#"
  class="termly-display-preferences"
  @click="openConsentPreferences"
>
  Consent Preferences 2
</a>
                            <button class="termly-display-preferences">Manage Cookie Preferences</button>
                        </div>
                    </div>
                    <div class="footer-links">
                        <span class="status-indicator"></span>
                        <span>Available for opportunities</span>
                    </div>
                </div>
            </footer>
        </div>
    `,
    methods: {
        openConsentPreferences(e) {
            e.preventDefault();
            if (window.Termly) {
                window.Termly.openConsentPreferences();
            }
        }
    }
};

// Create and mount the app
createApp(App)
    .component('Navbar', Navbar)
    .component('Terminal', Terminal)
    .use(router)
    .mount('#app');

// Test cookies and vendors for TCF testing
function setTestCookies() {
    // Analytics cookies
    document.cookie = "_ga=GA1.1.123456789.1234567890; path=/; max-age=31536000";
    document.cookie = "_gid=GA1.1.987654321.0987654321; path=/; max-age=86400";
    document.cookie = "_fbp=fb.1.1234567890123.1234567890; path=/; max-age=7776000";
    
    // Marketing cookies
    document.cookie = "_gcl_au=1.1.1234567890.1234567890; path=/; max-age=7776000";
    document.cookie = "test_marketing=marketing_value; path=/; max-age=86400";
    document.cookie = "pixels_ai_user=user_123456; path=/; max-age=31536000";
    
    // Functional cookies
    document.cookie = "user_preferences=theme_dark; path=/; max-age=31536000";
    document.cookie = "session_id=sess_123456789; path=/; max-age=3600";
    
    console.log('Test cookies set for TCF testing');
}

// Set test cookies on page load
setTimeout(setTestCookies, 2000);

// Let Termly handle TCF natively

// Termly will automatically handle elements with termly-display-preferences class