import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Agregar Bootstrap CSS
import './styles/styles.css';
import Semaphor from './js/components/Semaphor';

ReactDOM.render(
  <React.StrictMode>
    <Semaphor />
  </React.StrictMode>,
  document.getElementById('root')
);
