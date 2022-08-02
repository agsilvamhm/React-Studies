import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Componentes/Pages/App.module';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

