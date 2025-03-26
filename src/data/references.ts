import { Locales } from 'localization';

interface Reference {
  name: Locales;
  position: Locales;
  company: Locales | string;
  phone?: string;
  email?: string;
  telegram?: string;
}

const references: Reference[] = [
  {
    name: {
      en: 'Oleg Piskun',
      ru: 'Олег Пискун',
      uk: 'Олег Піскун',
    },
    position: {
      en: 'General Manager',
      ru: 'Главный управляющий',
      uk: 'Головний менеджер',
    },
    company: {
      en: 'Appsider',
      ru: 'Appsider',
      uk: 'Appsider',
    },
    phone: '+38 067 328-57-59',
    telegram: 'Oleg_Piskun',
  },
  {
    name: {
      en: 'Marina Sopinskaya',
      ru: 'Марина Сопинская',
      uk: 'Марина Сопінська',
    },
    position: {
      en: 'General Manager',
      ru: 'Главный управляющий',
      uk: 'Головний менеджер',
    },
    company: {
      en: 'Gym Network "Champion"',
      ru: 'Сеть СК "Чемпион"',
      uk: 'Мережа СК "Чемпіон"',
    },
    phone: '+38 098 218-09-24',
    email: 'sopinskaya96@gmail.com',
  },
  {
    name: {
      en: 'Aleksandr Tsybenko',
      ru: 'Александр Цыбенко',
      uk: 'Олександр Цибенко',
    },
    position: {
      en: 'Team lead programmer',
      ru: 'Ведущий программист',
      uk: 'Ведучий програміст',
    },
    company: 'Skylogic',
    phone: '+38 093 447-53-25',
    email: 'cccaaavvv@gmail.com',
  },
];

export default references;
