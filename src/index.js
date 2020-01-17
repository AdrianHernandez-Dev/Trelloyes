import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import App from './App';
import './index.css';

ReactDOM.render(<App  store={Store}/>, 
  document.getElementById('root'));
