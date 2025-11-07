const Resume = {
    template: `
        <div class="resume-page">
            <Terminal command="cat resume.txt">
                <h1>Resume</h1>
                <p>Download my latest resume or view experience online</p>
            </Terminal>

            <div class="resume-content">
                <div class="resume-actions">
                    <button class="download-btn" @click="downloadResume">
                        <i class="fas fa-download"></i>
                        Download PDF
                    </button>
                    <button class="view-btn" @click="toggleView">
                        <i class="fas fa-eye"></i>
                        {{ showDetails ? 'Hide' : 'View' }} Details
                    </button>
                </div>

                <div class="resume-preview" v-if="showDetails">
                    <div class="resume-section">
                        <h2><i class="fas fa-user"></i> About</h2>
                        <p>{{ about }}</p>
                    </div>

                    <div class="resume-section">
                        <h2><i class="fas fa-briefcase"></i> Experience</h2>
                        <div class="experience-item" v-for="job in experience" :key="job.id">
                            <div class="job-header">
                                <h3>{{ job.title }}</h3>
                                <span class="company">{{ job.company }}</span>
                                <span class="duration">{{ job.duration }}</span>
                            </div>
                            <ul class="job-responsibilities">
                                <li v-for="responsibility in job.responsibilities" :key="responsibility">
                                    {{ responsibility }}
                                </li>
                            </ul>
                            <div class="job-tech">
                                <span v-for="tech in job.technologies" :key="tech" class="tech-tag">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="resume-section">
                        <h2><i class="fas fa-graduation-cap"></i> Education</h2>
                        <div class="education-item" v-for="edu in education" :key="edu.id">
                            <h3>{{ edu.degree }}</h3>
                            <p>{{ edu.school }} • {{ edu.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            showDetails: false,
            about: "Experienced Software Engineer transitioning to Support Engineering, combining technical expertise with customer-focused problem-solving. Passionate about bridging the gap between complex technical solutions and user needs.",
            experience: [
                {
                    id: 1,
                    title: "Support Engineer",
                    company: "Tech Company",
                    duration: "2025 - Present",
                    responsibilities: [
                        "Provide technical support for complex software issues",
                        "Collaborate with engineering teams to resolve customer problems",
                        "Create and maintain technical documentation",
                        "Analyze customer feedback to improve product features"
                    ],
                    technologies: ["JavaScript", "Zendesk", "Retool", "JIRA", "Customer Service", "Troubleshooting", "Communication", "Problem Solving"]
                },
                {
                    id: 2,
                    title: "Software Engineer",
                    company: "Previous Company",
                    duration: "2022 - 2025",
                    responsibilities: [
                        "Developed full-stack web applications using modern frameworks",
                        "Implemented RESTful APIs and database solutions",
                        "Collaborated in agile development teams",
                        "Mentored junior developers and conducted code reviews"
                    ],
                    technologies: ["Vue.js", "SQL", "REST APIs", "Docker", "Node.js", "SQL", "AWS", "Git", "C#", "ASP.NET", "Azure", "Azure DevOps"]
                }
            ],
            education: [
                {
                    id: 1,
                    degree: "Bachelor of Science in Computer Science",
                    school: "University of San Jose-Recoletos",
                    year: "2020"
                }
            ]
        }
    },
    methods: {
        downloadResume() {
            // Simulate resume download
            alert('Resume download would start here. Add your actual resume file.');
        },
        toggleView() {
            this.showDetails = !this.showDetails;
        }
    }
};