import express from "express";
import React from "react";
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom'
import App from './src/App'

const app = express();

app.use(express.static('./build', {index: false}));

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <StaticRouter location={req.url}>
            <React.StrictMode>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </React.StrictMode>
        </StaticRouter>
    );

    return res.send(
        `
        <html>
            <body>
                <div id="root">${reactApp}</div>
            </body>
        </html>
        `
    );
});

app.listen(8080, () => {
    console.log('Server listening to port 8080');
})