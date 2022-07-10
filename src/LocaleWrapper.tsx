import React, { useEffect, useState } from 'react';
import { localStorageDetector } from 'typesafe-i18n/detectors';
import TypesafeI18n from './i18n/locale/i18n-react';
import { detectLocale } from './i18n/locale/i18n-util';
import { loadLocaleAsync } from './i18n/locale/i18n-util.async';
import { loadAllLocales } from './i18n/locale/i18n-util.sync';

const detectedLocale = detectLocale(localStorageDetector);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LocaleWrapper = ({ children }: React.PropsWithChildren<any>) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadAllLocales();
    loadLocaleAsync(detectedLocale).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <>loading</>;
  }

  return (
    <TypesafeI18n locale={detectedLocale}>
      {children}
    </TypesafeI18n>
  );
};
