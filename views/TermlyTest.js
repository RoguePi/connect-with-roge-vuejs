const TermlyTest = {
    template: `
        <div class="termly-test-page">
            <Terminal command="cat termly-test.txt">
                <h1>Termly Accessibility Testing</h1>
                <p>Testing blocked content notices and accessibility compliance</p>
            </Terminal>

            <div class="test-section">
                <h2><i class="fas fa-code"></i> Dynamic YouTube iframe Test</h2>
                <p>Dynamically injected YouTube iframe with placeholder - tests data-termly-placeholder-id.</p>
                
                <!-- Placeholder Container -->
                <div id="dynamic-widget-container" 
                     style="height: 315px; width: 100%; max-width: 560px; border: 1px solid var(--border); overflow: hidden; border-radius: 12px; background: var(--card-bg);">
                </div>
            </div>

            <div class="test-section">
                <h2><i class="fab fa-youtube"></i> Static YouTube Embed Test</h2>
                <p>Regular YouTube embed </p>
                
                <div style="margin: 2rem 0;">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="border-radius: 12px;">
                    </iframe>
                </div>
            </div>

         
            <div class="test-section">
                <h2><i class="fas fa-wpforms"></i> Conversion Form Test</h2>
                <p>Form with tracking pixels - consent logic must not interfere with accessibility.</p>
                
                <form @submit.prevent="handleSubmit" class="test-form">
                    <div class="form-group">
                        <label for="test-name">Name</label>
                        <input 
                            type="text" 
                            id="test-name" 
                            v-model="formData.name"
                            required
                            aria-required="true">
                    </div>

                    <div class="form-group">
                        <label for="test-email">Email</label>
                        <input 
                            type="email" 
                            id="test-email" 
                            v-model="formData.email"
                            required
                            aria-required="true">
                    </div>

                    <div class="form-group">
                        <label for="test-message">Message</label>
                        <textarea 
                            id="test-message" 
                            v-model="formData.message"
                            rows="4"
                            required
                            aria-required="true"></textarea>
                    </div>

                    <button 
                        type="submit" 
                        class="submit-btn"
                        :disabled="isSubmitting"
                        aria-label="Submit form">
                        <i class="fas fa-paper-plane"></i>
                        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                    </button>

                    <!-- Tracking Pixels (will be blocked by Termly) -->
                    <img 
                        src="https://www.facebook.com/tr?id=TEST123456789&ev=PageView&noscript=1" 
                        height="1" 
                        width="1" 
                        style="display:none"
                        alt=""
                        data-termly-blocked="marketing">
                </form>

                <div v-if="submitMessage" 
                     role="status" 
                     aria-live="polite"
                     class="submit-message"
                     :class="submitSuccess ? 'success' : 'error'">
                    {{ submitMessage }}
                </div>
            </div>

            <div class="test-section">
                <h2><i class="fas fa-clipboard-check"></i> Accessibility Checklist</h2>
                <ul class="checklist">
                    <li>
                        <input type="checkbox" id="check1" disabled>
                        <label for="check1">YouTube placeholder is keyboard accessible (Tab to focus)</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check2" disabled>
                        <label for="check2">Screen reader announces blocked state</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check3" disabled>
                        <label for="check3">No keyboard traps in blocked content</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check4" disabled>
                        <label for="check4">Form remains keyboard accessible after consent</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check5" disabled>
                        <label for="check5">Focus preserved after consent decision</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check6" disabled>
                        <label for="check6">Consent button is keyboard accessible</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check7" disabled>
                        <label for="check7">Dynamic iframe placeholder renders correctly</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check8" disabled>
                        <label for="check8">Dynamic content loads after consent</label>
                    </li>
                </ul>
            </div>

            <div class="test-section">
                <h2><i class="fas fa-info-circle"></i> Testing Instructions</h2>
                <ol class="instructions">
                    <li>Clear cookies and reload the page</li>
                    <li>Verify blocked content notice appears in the container</li>
                    <li>Use Tab key to navigate to the placeholder</li>
                    <li>Verify screen reader announces blocked state</li>
                    <li>Click consent preferences button (bottom-left)</li>
                    <li>Accept marketing/advertising cookies and save</li>
                    <li><strong>Reload the page</strong> - YouTube video should now load</li>
                    <li>Navigate to form using keyboard only</li>
                    <li>Fill and submit form using Tab and Enter keys</li>
                    <li>Verify no keyboard traps or focus issues</li>
                </ol>
            </div>
        </div>
    `,
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            isSubmitting: false,
            submitMessage: '',
            submitSuccess: false
        };
    },
    methods: {
        handleSubmit() {
            this.isSubmitting = true;
            this.submitMessage = '';

            // Simulate form submission with tracking
            setTimeout(() => {
                // Track conversion (will be blocked by Termly if no consent)
                if (window.fbq) {
                    window.fbq('track', 'Lead');
                }
                if (window.pixelsAI) {
                    window.pixelsAI.track('form_submit', this.formData);
                }

                this.isSubmitting = false;
                this.submitSuccess = true;
                this.submitMessage = 'Form submitted successfully! Check console for tracking events.';
                
                console.log('Form submitted:', this.formData);
            }, 1000);
        }
    }
};
