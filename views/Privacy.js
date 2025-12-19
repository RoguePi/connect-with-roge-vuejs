const Privacy = {
    template: `
    <iframe src="/policy-content.html" ref="policyFrame"style="width: 100%; height: 21181px; border: none;" srcdoc="
&lt;html&gt;
    &lt;head&gt;
        &lt;style&gt;
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div style=&quot;width:90%; max-width:1200px; margin:auto;&quot; name=&quot;termly-embed&quot; data-id=&quot;cd733249-ef89-4304-befa-4ce0c6b26f42&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot;&gt;(function(d, s, id) {
  var js, tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = &quot;https://app.termly.io/embed-policy.min.js&quot;;
  tjs.parentNode.insertBefore(js, tjs);
}(document, 'script', 'termly-jssdk'));&lt;/script&gt;
        &lt;script type=&quot;module&quot;&gt;
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, &quot;*&quot;)
            }

            const observer = new ResizeObserver((entries) =&gt; {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener(&quot;message&quot;, (event) =&gt; {
                if (event.source !== window.parent) return
                if (event.data !== &quot;getEmbedHeight&quot;) return
                sendEmbedHeight()
            })


        &lt;/script&gt;
    &lt;body&gt;
&lt;/html&gt;
"></iframe>
    `,
    mounted() {
        // Load Termly embed script
        this.loadTermlyEmbed();
    },
    methods: {
        loadTermlyEmbed() {
            if (document.getElementById('termly-jssdk')) return;
            
            const js = document.createElement('script');
            js.id = 'termly-jssdk';
            js.src = 'https://app.termly.io/embed-policy.min.js';
            
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(js, firstScript);
        }
    }
};