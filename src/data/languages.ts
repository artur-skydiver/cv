import { Locales } from 'localization';

interface Language {
  name: Locales;
  level: Locales;
  percent: number;
}

const languages: Language[] = [
  {
    name: { en: 'English', ru: 'Английский', uk: 'Англійська' },
    level: { en: 'Intermediate', ru: 'Средний', uk: 'Середній' },
    percent: 40
  },
  {
    name: { en: 'Russian', ru: 'Русский', uk: 'Російська' },
    level: { en: 'Native speaker', ru: 'Носитель языка', uk: 'Рідна мова' },
    percent: 100
  },
  {
    name: { en: 'Ukrainian', ru: 'Украинский', uk: 'Українська' },
    level: { en: 'Fluent', ru: 'Свободно', uk: 'Вільно' },
    percent: 85
  }
];

export default languages;
