import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import moment from "moment";
import {Provider} from "react-redux";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./assets/initialState.json";

const store = createStore(appReducer,initialState);

// Get EST time every second
(() => {
    setInterval(()=>{
      store.dispatch({
        type: C.SET_EST,
        payload: moment().format('HH:mm:ss')
        // payload: moment().utcOffset(-5).format('HH:mm:ss')
      })
    }, 1000);
})();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
