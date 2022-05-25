import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

