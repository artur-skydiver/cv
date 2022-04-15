interface Skill {
  name: string;
  experience: string;
  percent: number;
}

const skills: Skill[] = [
  {
    name: 'HTML, CSS (Sass)',
    experience: 'Expert',
    percent: 100
  },
  {
    name: 'JavaScript, TypeScript',
    experience: 'Expert',
    percent: 90
  },
  {
    name: 'ReactJS, Redux, MobX',
    experience: 'Expert',
    percent: 90
  },
  {
    name: 'React Native',
    experience: 'Expert',
    percent: 90
  },
  {
    name: 'PHP (Laravel)',
    experience: 'Expert',
    percent: 90
  },
  {
    name: 'Databases',
    experience: 'Experienced',
    percent: 75
  },
  {
    name: 'Delphi',
    experience: 'Expert',
    percent: 90
  },
  {
    name: 'Figma, Corel Draw, Photoshop',
    experience: 'Skillful',
    percent: 60
  },
  {
    name: '3D Max (V-Ray), AutoCAD',
    experience: 'Skillful',
    percent: 60
  },
  {
    name: 'Premiere, After Effects',
    experience: 'Skillful',
    percent: 50
  }
];

export default skills;
