import React, { createContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { selectLanguage } from "./languagesSlice";

const DEFAULT_LOCALE = "en";
const LanguageContext = createContext<{ locale: string; messages: any }>({
  locale: DEFAULT_LOCALE,
  messages: {},
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const locale: string = useSelector(selectLanguage);

  const intlProviderValue = useMemo(() => {
    return {
      locale: locale || DEFAULT_LOCALE,
      messages: require(`../translations/${locale || DEFAULT_LOCALE}.json`),
    };
  }, [locale]);
  return (
    <LanguageContext.Provider value={intlProviderValue}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const locale: string = useSelector(selectLanguage);
  const messages = require(`../translations/${locale || DEFAULT_LOCALE}.json`);

  const memoizedLocale = useMemo(() => locale || DEFAULT_LOCALE, [locale]);
  const memoizedMessages = useMemo(() => messages, [messages]);

  return (
    <IntlProvider locale={memoizedLocale} messages={memoizedMessages}>
      <LanguageProvider>{children}</LanguageProvider>
    </IntlProvider>
  );
};

export default LanguageWrapper;
