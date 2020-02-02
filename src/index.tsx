import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';

console.log('Printing all the environment variables', process.env)
// import LogRocket from 'logrocket';
// LogRocket.init('9mzoy6/afd-poc');

ReactDOM.render(<CookiesProvider><App /></CookiesProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
