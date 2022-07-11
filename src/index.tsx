import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import App from './App';
import { themeConfig } from './config/theme';
import { LocaleWrapper } from './LocaleWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <LocaleWrapper>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themeConfig}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </LocaleWrapper>
  </React.StrictMode>,
);
