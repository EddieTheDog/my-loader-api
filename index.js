window.LoaderAPI = {
    render: function(config) {
        const target = document.querySelector(config.target);
        if (!target) return;

        // Default Values
        const color = config.color || '#38bdf8';
        const size = config.size || '60px';
        const speed = config.speed || '1s';

        const templates = {
            'spinner': `<div class="api-spinner"></div>`,
            'ripple': `<div class="api-ripple"></div>`,
            'morph': `<div class="api-morph"></div>`,
            'dots': `<div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div>`,
            'composite': `
                <div class="api-composite">
                    <div class="api-spinner" style="--loader-size: calc(${size} * 0.7)"></div>
                    <div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div>
                </div>`,
            'skeleton': `<div class="api-skeleton" style="width:100%; height:${size}"></div>`
        };

        target.innerHTML = `<div class="api-instance">${templates[config.type] || templates['spinner']}</div>`;
        
        const el = target.querySelector('.api-instance');
        el.style.setProperty('--loader-color', color);
        el.style.setProperty('--loader-size', size);
        el.style.setProperty('--loader-speed', speed);
    }
};
