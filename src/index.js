import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './assets/css/index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots } from './reducers';


const logger = createLogger;
const store = createStore(searchRobots, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <App userbot={''} />
    </Provider>
  </div>
);

reportWebVitals();
