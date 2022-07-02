import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { themeConfig } from './config/theme';
import TypesafeI18n from './i18n/locale/i18n-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <TypesafeI18n locale="en">
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </TypesafeI18n>
  </React.StrictMode>,
);
