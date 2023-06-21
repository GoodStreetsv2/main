import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
// import * as bootstrap from 'bootstrap';
import './styles/main.scss';
import App from './components/App.jsx';

 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

