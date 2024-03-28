import { Locales } from 'localization';

interface Institution {
  name: Locales;
  dates: string;
  subject: Locales | string;
}

const education: Institution[] = [
  {
    name: {
      en: 'I.I. Mechnikov Odessa National University',
      ru: 'Одесский национальный университет им. И. И. Мечникова',
      uk: 'Одеський національний університет ім. І. І. Мечникова',
    },
    dates: '2007–2013',
    subject: {
      en: 'Master of Science, Economist cybernetician',
      ru: 'Магистр наук, экономист-кибернетик',
      uk: 'Магістр наук, економіст-кібернетик',
    },
  },
  {
    name: {
      en: 'Course on Computer Graphics',
      ru: 'Курс компьютерной графики',
      uk: "Курс комп'ютерної графіки",
    },
    dates: '2006–2007',
    subject: {
      en: '2D graphics, 3D modeling',
      ru: '2D графика, 3D моделирование',
      uk: '2D графіка, 3D моделювання',
    },
  },
  {
    name: {
      en: 'Course on Software Development',
      ru: 'Курс по разработке программного обеспечения',
      uk: 'Курс з розробки програмного забезпечення',
    },
    dates: '2005–2007',
    subject: 'Pascal, Delphi',
  },
  {
    name: {
      en: 'Course on WEB Development',
      ru: 'Курс по веб-разработке',
      uk: 'Курс з веб-розробки',
    },
    dates: '2006',
    subject: 'HTML, CSS, JS, PHP',
  },
];

export default education;
