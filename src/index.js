import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import './index.scss';
import App from './app';
import * as serviceWorker from './registerServiceWorker';

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render((
  <App/>
), document.getElementById('root'));
serviceWorker.register();
