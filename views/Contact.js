const Contact = {
    template: `
        <div class="contact-page">
            <Terminal command="ping roge.dev">
                <h1>Get in Touch</h1>
                <p>Let's connect and discuss opportunities</p>
            </Terminal>

            <div class="contact-content">
                <div class="contact-grid">
                    <div class="contact-info">
                        <h2><i class="fas fa-address-card"></i> Contact Information</h2>
                        <div class="contact-methods">
                            <a v-for="method in contactMethods" 
                               :key="method.type"
                               :href="method.url"
                               class="contact-method"
                               target="_blank">
                                <i :class="method.icon"></i>
                                <div>
                                    <h3>{{ method.type }}</h3>
                                    <p>{{ method.value }}</p>
                                </div>
                            </a>
                        </div>
                        
                        <div class="availability">
                            <h3><i class="fas fa-clock"></i> Availability</h3>
                            <p>Currently open to new opportunities in Support Engineering and Software Development roles.</p>
                            <div class="status">
                                <span class="status-indicator"></span>
                                <span>Available for hire</span>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <h2><i class="fas fa-paper-plane"></i> Send a Message</h2>
                        <form @submit.prevent="sendMessage">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" v-model="form.name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="form.email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" v-model="form.subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" v-model="form.message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn" :disabled="isSubmitting">
                                <i class="fas fa-send"></i>
                                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            contactMethods: [
                {
                    type: "Email",
                    value: "your.email@example.com",
                    url: "mailto:your.email@example.com",
                    icon: "fas fa-envelope"
                },
                {
                    type: "LinkedIn",
                    value: "linkedin.com/in/rogelyn-pizon-b31995112",
                    url: "https://www.linkedin.com/in/rogelyn-pizon-b31995112/",
                    icon: "fab fa-linkedin"
                },
                {
                    type: "GitHub",
                    value: "github.com/YOUR_USERNAME",
                    url: "https://github.com/YOUR_USERNAME",
                    icon: "fab fa-github"
                },
                {
                    type: "Phone",
                    value: "+1 (555) 123-4567",
                    url: "tel:+15551234567",
                    icon: "fas fa-phone"
                }
            ],
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            isSubmitting: false
        }
    },
    methods: {
        async sendMessage() {
            this.isSubmitting = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Message sent! I\'ll get back to you soon.');
                this.resetForm();
                this.isSubmitting = false;
            }, 2000);
        },
        resetForm() {
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        }
    }
};