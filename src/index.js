import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import * as serviceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render((
  <App/>
), document.getElementById('root'));
serviceWorker.register();
