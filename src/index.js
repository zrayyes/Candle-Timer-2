import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import appReducer from "./store/reducers";
import defaultState from "./assets/initialState.json";

if (!localStorage.getItem('CandleTimerSettigns')) {
  localStorage.setItem('CandleTimerSettigns', JSON.stringify(defaultState));
}

const initialState = JSON.parse(localStorage.getItem('CandleTimerSettigns'));

const store = createStore(appReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
