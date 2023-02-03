import App from './App';

import React from 'react';
/* import { createRoot } from 'react-dom'; */
import { hydrateRoot, createRoot } from 'react-dom/client';
 
import reportWebVitals from './reportWebVitals';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const app = <React.StrictMode>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </React.StrictMode>;

// v.16
/* 
const root = document.getElementById('root');
if(root.hasChildNodes()) {
    ReactDom.hydrate(app, root)
} else {
    ReactDom.render(app, root)
} */


// v.18
const domNode = document.getElementById('root');
if(domNode.hasChildNodes()) {
    hydrateRoot(domNode, app); 
} else {
    const root = createRoot(domNode);
    root.render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();