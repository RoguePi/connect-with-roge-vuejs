const Home = {
    template: `
        <div class="home">
            <header class="hero">
                <Terminal command="whoami">
                    <h1 class="name">Rogelyn Pizon</h1>
                    <p class="title">Software Engineer → Support Engineer</p>
                    <p class="description">Bridging code and customer success</p>
                    <div class="hero-actions">
                        <router-link to="/projects" class="btn-primary">
                            <i class="fas fa-code"></i>
                            View Projects
                        </router-link>
                        <router-link to="/contact" class="btn-secondary">
                            <i class="fas fa-envelope"></i>
                            Get in Touch
                        </router-link>
                    </div>
                </Terminal>
            </header>

            <section class="skills fade-in">
                <h2><i class="fas fa-tools"></i> Tech Stack</h2>
                <div class="skills-grid">
                    <div class="skill-category fade-in" v-for="(category, index) in skills" :key="category.name" :style="{animationDelay: index * 0.1 + 's'}">
                        <h3>{{ category.name }}</h3>
                        <div class="skill-tags">
                            <span v-for="skill in category.items" :key="skill" class="skill-tag">
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="quick-links fade-in">
                <h2><i class="fas fa-rocket"></i> Quick Access</h2>
                <div class="quick-grid">
                    <router-link to="/projects" class="quick-card fade-in" style="animation-delay: 0.1s">
                        <i class="fas fa-laptop-code"></i>
                        <h3>Projects</h3>
                        <p>Explore my work</p>
                    </router-link>
                    <router-link to="/resume" class="quick-card fade-in" style="animation-delay: 0.2s">
                        <i class="fas fa-file-alt"></i>
                        <h3>Resume</h3>
                        <p>Download CV</p>
                    </router-link>
                    <router-link to="/contact" class="quick-card fade-in" style="animation-delay: 0.3s">
                        <i class="fas fa-comments"></i>
                        <h3>Contact</h3>
                        <p>Let's connect</p>
                    </router-link>
                </div>
            </section>
        </div>
    `,
    data() {
        return {
            skills: [
                {
                    name: "Frontend",
                    items: ["Vue.js", "JavaScript", "HTML5", "CSS3", "React"]
                },
                {
                    name: "Backend",
                    items: ["Node.js", "Python", "SQL", "REST APIs", "GraphQL"]
                },
                {
                    name: "Support",
                    items: ["Debugging", "Customer Success", "Documentation", "Troubleshooting"]
                },
                {
                    name: "Tools",
                    items: ["Git", "Docker", "AWS", "Jira", "Postman"]
                }
            ]
        }
    },
    mounted() {
        this.animateOnScroll();
    },
    methods: {
        animateOnScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            });
            
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }
    }
};