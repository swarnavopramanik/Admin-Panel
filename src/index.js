import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './components/Feedback';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Feedback />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
