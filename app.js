const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Define routes
const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact }
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
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=9442a5ea-6484-4199-adec-d01e9ff402a5" data-termly-policy="cookie-policy" >Cookie Preferences</a>
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=cd733249-ef89-4304-befa-4ce0c6b26f42" data-termly-policy="privacy-policy">Privacy Policy</a>
                            <a href="#" data-termly-policy="terms-of-service">Terms of Service</a>
                            <a href="#" onclick="displayPreferenceModal();return false;" id="termly-consent-preferences" class="termly-display-preferences">Consent Preferences</a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <span class="status-indicator"></span>
                        <span>Available for opportunities</span>
                    </div>
                </div>
            </footer>
        </div>
    `
};

// Create and mount the app
createApp(App)
    .component('Navbar', Navbar)
    .component('Terminal', Terminal)
    .use(router)
    .mount('#app');