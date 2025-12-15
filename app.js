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
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=9442a5ea-6484-4199-adec-d01e9ff402a5" data-termly-policy="cookie-policy" >Cookie Policy</a>
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=cd733249-ef89-4304-befa-4ce0c6b26f42" data-termly-policy="privacy-policy">Privacy Policy</a>
                            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=0dba82c5-dcfd-4b57-88f5-3e3187a9375d" data-termly-policy="terms-of-service">Terms of Service</a>
                            <li><a href="#" class="termly-display-preferences">Consent Preferences</a></li>
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

// Test cookies and vendors for TCF testing
function setTestCookies() {
    // Analytics cookies
    document.cookie = "_ga=GA1.1.123456789.1234567890; path=/; max-age=31536000";
    document.cookie = "_gid=GA1.1.987654321.0987654321; path=/; max-age=86400";
    document.cookie = "_fbp=fb.1.1234567890123.1234567890; path=/; max-age=7776000";
    
    // Marketing cookies
    document.cookie = "_gcl_au=1.1.1234567890.1234567890; path=/; max-age=7776000";
    document.cookie = "test_marketing=marketing_value; path=/; max-age=86400";
    
    // Functional cookies
    document.cookie = "user_preferences=theme_dark; path=/; max-age=31536000";
    document.cookie = "session_id=sess_123456789; path=/; max-age=3600";
    
    console.log('Test cookies set for TCF testing');
}

// Set test cookies on page load
setTimeout(setTestCookies, 2000);

// Termly will automatically handle elements with termly-display-preferences class