import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { HelmetProvider } from 'react-helmet-async';

import App from '../src/App';

const app = express();

app.use('^/$', (req, res, next) => {

    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        console.log(err, data)
        if(err) {
            console.log(err);
            return res.status(500).send("Some error happened");
        }
        return res.send(
            data.replace(
                '<div id="root"></div>', 
                `<div id="root">
                    ${ReactDOMServer.renderToString(
                        <React.StrictMode>
                            <HelmetProvider>
                                <App />
                            </HelmetProvider>
                        </React.StrictMode>
                    )}
                </div>`
                )
            )
    });
    
});

console.log("dir: " + __dirname)
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(3000, () => {
    console.log('listening on 3000')
})