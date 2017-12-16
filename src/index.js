import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import moment from "moment";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import C from "./constants";
import appReducer from "./store/reducers";

const store = createStore(appReducer);

(() => {
    setInterval(()=>{
      store.dispatch({
        type: C.SET_EST,
        payload: moment().utcOffset(-5).format('HH:mm:ss')
      })
    }, 1000);
})();

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
