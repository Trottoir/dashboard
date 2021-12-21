import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dapp from './components/Dapp';
import { store } from './store/store';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

store.dispatch( {type:'callApi'});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dapp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


