import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider } from "@usedapp/core";

const test = 
      <div>
        <meta charSet="utf-8" /><link rel="icon" href="/favicon.ico" /><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,maximum-scale=1,minimum-scale=1" /><meta name="theme-color" content="#000000" /><meta name="description" content="Tomb Finance | FTM pegged algocoin" /><link rel="apple-touch-icon" href="/logo192.png" /><link rel="manifest" href="/manifest.json" /><link rel="preconnect" href="https://fonts.gstatic.com" /><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Amarante&display=swap" rel="stylesheet" /><title>Tomb Finance</title><link href="/static/css/main.5a540024.chunk.css" rel="stylesheet" /><noscript>You need to enable JavaScript to run this app.</noscript><div id="root" />
      </div>;
ReactDOM.render(test, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    {

    }
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
