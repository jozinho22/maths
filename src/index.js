import App from './App';

import React from 'react';
/* import ReactDOM from 'react-dom';  */
import { hydrateRoot, createRoot } from 'react-dom/client';
 
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
/* import { PrerenderedControler, ClientSideComponent } from "react-prerendered-component";
 */
import './index.css';

const app = <React.StrictMode>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </React.StrictMode>
// v.16

/* const root = document.getElementById('root');
if(root.hasChildNodes()) {
    ReactDOM.hydrate(app, root)
} else {
    ReactDOM.render(app, root)
}  */ 

// v.18
const domNode = document.getElementById('root');

if(domNode.hasChildNodes()) {
    console.log('hyd')
    hydrateRoot(domNode, app);  
} else {
    console.log('render')
    const root = createRoot(domNode);
    root.render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();