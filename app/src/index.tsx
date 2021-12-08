import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from 'react-favicon';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <React.StrictMode>  
    <Favicon url="./assets/logo-jet.png"/>  
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
