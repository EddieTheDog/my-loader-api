window.LoaderAPI = {
    render: function(config) {
        const target = document.querySelector(config.target);
        if (!target) return;

        const color = config.color || '#38bdf8';
        const size = config.size || '60px';
        const speed = config.speed || '1s';

        const html = {
            'spinner': `<div class="api-spinner"></div>`,
            'ripple': `<div class="api-ripple"></div>`,
            'composite': `<div class="api-composite"><div class="api-spinner" style="width:50%;height:50%"></div><div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div></div>`,
            'morph': `<div class="api-morph"></div>`,
            'skeleton': `<div class="api-skeleton" style="width:100%; height:${size}"></div>`
        };

        target.innerHTML = `<div class="api-host">${html[config.type] || ''}</div>`;
        const host = target.querySelector('.api-host');
        host.style.setProperty('--loader-color', color);
        host.style.setProperty('--loader-size', size);
        host.style.setProperty('--loader-speed', speed);
    }
};
