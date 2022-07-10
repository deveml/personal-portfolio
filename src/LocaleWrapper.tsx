import React, { useEffect } from 'react';
import { localStorageDetector } from 'typesafe-i18n/detectors';
import TypesafeI18n from './i18n/locale/i18n-react';
import { detectLocale } from './i18n/locale/i18n-util';
import { loadLocaleAsync } from './i18n/locale/i18n-util.async';

const detectedLocale = detectLocale(localStorageDetector);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LocaleWrapper = ({ children }: React.PropsWithChildren<any>) => {
  const initializeLocale = async () => { await loadLocaleAsync(detectedLocale); };

  useEffect(() => {
    initializeLocale();
  }, []);

  return (
    <TypesafeI18n locale={detectedLocale}>
      {children}
    </TypesafeI18n>
  );
};
