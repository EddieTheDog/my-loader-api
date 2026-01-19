window.LoaderAPI = {
    render: function(opt) {
        const target = document.querySelector(opt.target);
        if (!target) return;

        // Custom variables
        const color = opt.color || '#38bdf8';
        const size = opt.size || '60px';
        const speed = opt.speed || '1s';

        const html = {
            'spinner': `<div class="api-spinner"></div>`,
            'ripple': `<div class="api-ripple"></div>`,
            'morph': `<div class="api-morph"></div>`,
            'dots': `<div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div>`,
            'composite': `<div class="api-composite"><div class="api-spinner"></div><div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div></div>`,
            'skeleton': `<div class="api-skeleton" style="width:200px; height:${size}"></div>`
        };

        target.innerHTML = `<div class="api-container">${html[opt.type] || ''}</div>`;
        
        const wrap = target.querySelector('.api-container');
        wrap.style.setProperty('--loader-color', color);
        wrap.style.setProperty('--loader-size', size);
        wrap.style.setProperty('--loader-speed', speed);
    }
};
