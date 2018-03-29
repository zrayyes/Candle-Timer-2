import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import appReducer from "./reducers/reducers";
import defaultState from "./assets/initialState.json";

if (!localStorage.getItem('CandleTimerSettings')) {
  localStorage.setItem('CandleTimerSettings', JSON.stringify(defaultState));
}

const initialState = JSON.parse(localStorage.getItem('CandleTimerSettings'));

const store = createStore(appReducer, initialState);

store.subscribe(() => {
  localStorage.setItem('CandleTimerSettings', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
