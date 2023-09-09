import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { KdmProvider } from 'hooks/useKdm';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <KdmProvider>
    <App />
  </KdmProvider>

  // </React.StrictMode>
);
