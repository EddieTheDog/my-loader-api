const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/loader.css', (req, res) => {
    // Get custom properties from the URL (or use defaults)
    const primary = req.query.color ? `#${req.query.color}` : '#38bdf8';
    const size = req.query.size || '45px';
    const speed = req.query.speed || '1s';

    // Set the response type to CSS
    res.setHeader('Content-Type', 'text/css');

    // Send the CSS with the injected variables
    res.send(`
        :root {
            --primary: ${primary};
            --size: ${size};
            --speed: ${speed};
            --bg-skeleton: #334155;
        }

        /* All animations now use these dynamic variables */
        .api-spinner {
            width: var(--size);
            height: var(--size);
            border: 4px solid rgba(255,255,255,0.1);
            border-top: 4px solid var(--primary);
            border-radius: 50%;
            animation: spin var(--speed) linear infinite;
        }

        .api-dots .dot {
            width: calc(var(--size) / 4);
            height: calc(var(--size) / 4);
            background: var(--primary);
            animation: bounce var(--speed) infinite alternate;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes bounce { to { transform: translateY(-10px); } }
    `);
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
