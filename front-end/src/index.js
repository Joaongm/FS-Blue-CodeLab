import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom'
import history from './history'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
