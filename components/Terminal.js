const Terminal = {
    template: `
        <div class="terminal-window">
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="btn close"></span>
                    <span class="btn minimize"></span>
                    <span class="btn maximize"></span>
                </div>
                <div class="terminal-title">roge@portfolio:~$</div>
            </div>
            <div class="terminal-body">
                <div class="terminal-line">
                    <span class="prompt">roge@dev:~$</span>
                    <span class="command">{{ currentCommand }}</span>
                    <span class="cursor" v-show="showCursor">|</span>
                </div>
                <div class="output" v-if="showOutput">
                    <slot></slot>
                </div>
            </div>
        </div>
    `,
    props: {
        command: {
            type: String,
            default: 'whoami'
        }
    },
    data() {
        return {
            currentCommand: '',
            showCursor: true,
            showOutput: false
        }
    },
    mounted() {
        this.typeCommand();
        setInterval(() => {
            this.showCursor = !this.showCursor;
        }, 500);
    },
    methods: {
        typeCommand() {
            let i = 0;
            const type = () => {
                if (i < this.command.length) {
                    this.currentCommand += this.command.charAt(i);
                    i++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(() => {
                        this.showOutput = true;
                    }, 500);
                }
            };
            setTimeout(type, 1000);
        }
    }
};