// This function acts as your "API Call"
window.LoaderAPI = {
    import: function(config) {
        const { type, target, color, size, speed } = config;
        const container = document.querySelector(target);
        
        if (!container) return;

        // Apply custom styles via CSS Variables
        if (color) container.style.setProperty('--loader-color', color);
        if (size) container.style.setProperty('--loader-size', size);
        if (speed) container.style.setProperty('--loader-speed', speed);

        // Define the HTML for each loader type
        const loaders = {
            'spinner': '<div class="api-spinner"></div>',
            'ripple': '<div class="api-ripple"></div>',
            'morph': '<div class="api-morph"></div>',
            'composite': `
                <div class="api-composite">
                    <div class="api-spinner"></div>
                    <div class="api-dots">
                        <div class="api-dot"></div><div class="api-dot"></div><div class="api-dot"></div>
                    </div>
                </div>`,
            'skeleton': '<div class="api-skeleton" style="width:100%; height:20px;"></div>'
        };

        container.innerHTML = loaders[type] || 'Loader type not found';
    }
};
