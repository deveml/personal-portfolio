import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { themeConfig } from './config/theme';
import { LocaleWrapper } from './LocaleWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <LocaleWrapper>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </LocaleWrapper>
  </React.StrictMode>,
);
