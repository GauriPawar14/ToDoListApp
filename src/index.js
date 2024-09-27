import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App'; // Adjust the path as necessary

const container = document.getElementById('root');
const root = createRoot(container); // Create a root for the app

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
