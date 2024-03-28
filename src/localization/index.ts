/* eslint-disable global-require, no-nested-ternary */
import i18next, { ResourceLanguage } from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const LANGUAGE = 'language';

const langs = <const>['en', 'ru', 'uk'];

export type Lang = typeof langs[number];

export interface Locales<T = string> extends Partial<Record<Lang, T>> {
  en: T;
  ru?: T;
  uk?: T;
}

export const alphaCodes: Record<Lang, string> = {
  en: 'gb',
  ru: 'ru',
  uk: 'ua',
};

const setLangAttribute = (language: Lang) =>
  document.documentElement.setAttribute('lang', language);

const defaultLanguage: Lang = 'en';
const navigatorLanguage = navigator.language
  .substring(0, 2)
  .toLowerCase() as Lang;
const savedLanguage = window.localStorage.getItem(LANGUAGE) as Lang;

const initLang = langs.includes(savedLanguage)
  ? savedLanguage
  : langs.includes(navigatorLanguage)
  ? navigatorLanguage
  : defaultLanguage;

const resources: Record<Lang, { translation: ResourceLanguage }> = {
  en: { translation: require('./texts/en.json') },
  ru: { translation: require('./texts/ru.json') },
  uk: { translation: require('./texts/uk.json') },
};

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: initLang,
  resources,
});

i18next.on('languageChanged', (language: Lang) => {
  window.localStorage.setItem(LANGUAGE, language);
  setLangAttribute(language);
});

setLangAttribute(initLang);

const selectLocalized = <T = string>(value?: Locales<T> | string): T => {
  if (!value || typeof value === 'string') return value as never;
  return value[i18next.language as keyof Locales] || value.en;
};

export const useLocales = (keyPrefix?: string) => {
  const { t, i18n } = useTranslation(undefined, { keyPrefix });
  return { t, l: selectLocalized, language: i18n.language };
};
