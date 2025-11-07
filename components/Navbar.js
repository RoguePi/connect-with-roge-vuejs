const Navbar = {
    template: `
        <nav class="navbar">
            <div class="nav-container">
                <router-link to="/" class="nav-logo">
                    <i class="fas fa-terminal"></i>
                    <span>roge.dev</span>
                </router-link>
                <div class="nav-menu" :class="{ active: isMenuOpen }">
                    <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
                    <router-link to="/projects" class="nav-link" @click="closeMenu">Projects</router-link>
                    <router-link to="/resume" class="nav-link" @click="closeMenu">Resume</router-link>
                    <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
                </div>
                <div class="nav-toggle" @click="toggleMenu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    `,
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    }
};