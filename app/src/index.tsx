import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from 'react-favicon';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <React.StrictMode>  
    <Favicon url="https://freepngimg.com/download/money/70896-icons-money-bill-dollar-computer-bank-stock.png"/>  
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
