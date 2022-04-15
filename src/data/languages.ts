interface Language {
  name: string;
  level: string;
  percent: number;
}

const languages: Language[] = [
  {
    name: 'English',
    level: 'Intermediate',
    percent: 40
  },
  {
    name: 'Russian',
    level: 'Native speaker',
    percent: 100
  },
  {
    name: 'Ukrainian',
    level: 'Fluent',
    percent: 85
  }
];

export default languages;
