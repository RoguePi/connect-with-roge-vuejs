const Privacy = {
    template: `
    <div name="termly-embed" data-id="562e0fda-8b6a-47e3-ae54-fb7df7494ecd"></div>
    `,
    mounted() {
        // Load Termly embed script
        if (!document.getElementById('termly-jssdk')) {
            const js = document.createElement('script');
            js.id = 'termly-jssdk';
            js.src = 'https://app.termly.io/embed-policy.min.js';
            document.head.appendChild(js);
        }
    }
};