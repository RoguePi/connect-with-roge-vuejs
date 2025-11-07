const Projects = {
    template: `
        <div class="projects-page">
            <Terminal command="ls -la projects/">
                <h1>Projects & Experience</h1>
                <p>A collection of my work in software engineering and support</p>
            </Terminal>

            <div class="projects-grid">
                <div class="project-card" v-for="project in projects" :key="project.id">
                    <div class="project-header">
                        <i :class="project.icon"></i>
                        <h3>{{ project.title }}</h3>
                        <span class="project-type">{{ project.type }}</span>
                    </div>
                    <p>{{ project.description }}</p>
                    <div class="project-details">
                        <div class="tech-stack">
                            <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="project-links" v-if="project.links">
                            <a v-for="link in project.links" :key="link.type" 
                               :href="link.url" 
                               class="project-link"
                               target="_blank">
                                <i :class="link.icon"></i>
                                {{ link.type }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "E-commerce Platform",
                    type: "Full Stack",
                    description: "Built a complete e-commerce solution with user authentication, payment processing, and admin dashboard.",
                    icon: "fas fa-shopping-cart",
                    tech: ["Vue.js", "Node.js", "MongoDB", "Stripe API", "JWT"],
                    links: [
                        { type: "Demo", url: "#", icon: "fas fa-external-link-alt" },
                        { type: "Code", url: "#", icon: "fab fa-github" }
                    ]
                },
                {
                    id: 2,
                    title: "Customer Support Dashboard",
                    type: "Support Tool",
                    description: "Developed internal tools for tracking customer issues, automated responses, and performance metrics.",
                    icon: "fas fa-headset",
                    tech: ["React", "Python", "PostgreSQL", "Redis", "Docker"],
                    links: [
                        { type: "Demo", url: "#", icon: "fas fa-external-link-alt" }
                    ]
                },
                {
                    id: 3,
                    title: "API Documentation System",
                    type: "Documentation",
                    description: "Created comprehensive API documentation with interactive examples and automated testing.",
                    icon: "fas fa-book",
                    tech: ["Vue.js", "Markdown", "OpenAPI", "Jest", "CI/CD"]
                },
                {
                    id: 4,
                    title: "Real-time Chat Application",
                    type: "Web App",
                    description: "Built a real-time messaging platform with file sharing and video call integration.",
                    icon: "fas fa-comments",
                    tech: ["Socket.io", "Express", "WebRTC", "MongoDB", "AWS S3"],
                    links: [
                        { type: "Demo", url: "#", icon: "fas fa-external-link-alt" },
                        { type: "Code", url: "#", icon: "fab fa-github" }
                    ]
                }
            ]
        }
    }
};