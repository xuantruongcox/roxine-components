import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import roxinePreset from './roxine-preset';
import {ThemeUIProvider} from 'theme-ui'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeUIProvider theme={roxinePreset}>
      <App/>
    </ThemeUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

