/**
 * Master Loader API Engine
 * Usage: LoaderAPI.render({ type: 'spinner', target: '#id', color: 'red' });
 */
window.LoaderAPI = {
    render: function(options) {
        const { 
            type = 'spinner', 
            target, 
            color = '#38bdf8', 
            size = '50px', 
            speed = '1s' 
        } = options;

        const container = document.querySelector(target);
        if (!container) return console.error(`LoaderAPI: Target "${target}" not found.`);

        // Unique ID to prevent style bleeding
        const id = 'api-uid-' + Math.random().toString(36).substr(2, 9);

        // HTML Templates
        const templates = {
            'spinner': `<div class="api-spinner"></div>`,
            'ripple': `<div class="api-ripple"></div>`,
            'dots': `<div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div>`,
            'morph': `<div class="api-morph"></div>`,
            'skeleton': `<div class="api-skeleton" style="height:${size}"></div>`,
            'composite': `
                <div class="api-composite">
                    <div class="api-spinner" style="--loader-size: calc(${size} * 0.7)"></div>
                    <div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div>
                </div>`
        };

        // Inject Loader
        container.innerHTML = `<div id="${id}" class="api-loader-wrapper">${templates[type] || templates['spinner']}</div>`;

        // Apply Custom Properties
        const wrapper = document.getElementById(id);
        wrapper.style.setProperty('--loader-color', color);
        wrapper.style.setProperty('--loader-size', size);
        wrapper.style.setProperty('--loader-speed', speed);
    },

    // Function to remove loader when done
    stop: function(target) {
        const container = document.querySelector(target);
        if (container) container.innerHTML = '';
    }
};
