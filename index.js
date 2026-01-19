window.LoaderAPI = {
    render: function(c) {
        const t = document.querySelector(c.target);
        if (!t) return;
        const color = c.color || '#38bdf8';
        const size = c.size || '60px';
        const speed = c.speed || '1s';
        const html = {
            'spinner': `<div class="api-spinner"></div>`,
            'ripple': `<div class="api-ripple"></div>`,
            'morph': `<div class="api-morph"></div>`,
            'composite': `<div class="api-composite"><div class="api-spinner" style="width:50%;height:50%"></div><div class="api-dots"><div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div></div></div>`
        };
        t.innerHTML = `<div class="api-wrap">${html[c.type] || ''}</div>`;
        const wrap = t.querySelector('.api-wrap');
        wrap.style.setProperty('--loader-color', color);
        wrap.style.setProperty('--loader-size', size);
        wrap.style.setProperty('--loader-speed', speed);
    }
};
