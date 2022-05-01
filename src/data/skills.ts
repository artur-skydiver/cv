import { Locales } from 'localization';

type Experience = 'EXPERT' | 'EXPERIENCED' | 'SKILLFULL';

const EXPERIENCES: Record<Experience, Locales> = {
  EXPERT: { en: 'Expert', ru: 'Эксперт', uk: 'Експерт' },
  EXPERIENCED: { en: 'Experienced', ru: 'Опытный', uk: 'Досвідчений' },
  SKILLFULL: { en: 'Skillful', ru: 'Умелый', uk: 'Умілий' }
};

interface Skill {
  name: string;
  experience: Locales;
  percent: number;
}

const skills: Skill[] = [
  {
    name: 'HTML, CSS (Sass)',
    experience: EXPERIENCES.EXPERT,
    percent: 100
  },
  {
    name: 'JavaScript, TypeScript',
    experience: EXPERIENCES.EXPERT,
    percent: 90
  },
  {
    name: 'ReactJS, Redux, MobX',
    experience: EXPERIENCES.EXPERT,
    percent: 90
  },
  {
    name: 'React Native',
    experience: EXPERIENCES.EXPERT,
    percent: 90
  },
  {
    name: 'PHP (Laravel)',
    experience: EXPERIENCES.EXPERT,
    percent: 90
  },
  {
    name: 'Databases',
    experience: EXPERIENCES.EXPERIENCED,
    percent: 75
  },
  {
    name: 'Delphi',
    experience: EXPERIENCES.EXPERT,
    percent: 90
  },
  {
    name: 'Figma, Corel Draw, Photoshop',
    experience: EXPERIENCES.SKILLFULL,
    percent: 60
  },
  {
    name: '3D Max (V-Ray), AutoCAD',
    experience: EXPERIENCES.SKILLFULL,
    percent: 60
  },
  {
    name: 'Premiere, After Effects',
    experience: EXPERIENCES.SKILLFULL,
    percent: 50
  }
];

export default skills;
