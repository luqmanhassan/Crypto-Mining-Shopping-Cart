import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './Rout';
import {Provider} from 'react-redux';
import store from './store.js';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Rout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
