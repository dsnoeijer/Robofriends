import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App userbot={''} />
  </div>
);

reportWebVitals();
