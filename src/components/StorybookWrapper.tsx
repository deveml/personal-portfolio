import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import { themeConfig } from '../config/theme';
import { LocaleWrapper } from '../LocaleWrapper';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StorybookWrapper = ({ children }: React.PropsWithChildren<any>) => (
  <LocaleWrapper>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  </LocaleWrapper>
);
