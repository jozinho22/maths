import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  console.log('hydrate')
  ReactDOM.hydrate(<React.StrictMode><App /></React.StrictMode>, rootElement);
} else {
  console.log('render')
  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, rootElement);
} 

/* ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, rootElement);
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

