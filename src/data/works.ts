interface Place {
  title: string;
  partTime?: true;
  company: string;
  dates: string;
  address: string;
  duties: string[];
  tools: string[];
  description?: string;
}

const works: Place[] = [
  {
    title: 'FrontEnd developer',
    partTime: true,
    company: 'Provectus',
    dates: 'Oct. 2021 – Feb. 2022',
    address: 'Remote',
    duties: ['Development of mobile applications'],
    tools: ['React Native'],
    description:
      'I\'ve been working on a redesign, bug fixes and new features for the application "BodyFit Fitness Training Coach".'
  },
  {
    title: 'Full-stack developer',
    company: 'Magic Powered',
    dates: 'Sep. 2021 – Present',
    address: 'Remote',
    duties: [
      'Development of WEB-services',
      'Development of BackEnd’s API',
      'Development of mobile applications'
    ],
    tools: [
      'TypeScript',
      'React',
      'React Native',
      'NextJS',
      'Strapi',
      'PostgreSQL',
      'AWS'
    ],
    description:
      'I worked on creating sites using SSR technology, admin panels, content editors and APIs.'
  },
  {
    title: 'Full-stack developer',
    company: 'Appsider',
    dates: 'Mar. 2020 – Aug. 2021',
    address: 'Remote',
    duties: [
      'Development of mobile applications',
      'Development of WEB-services',
      'Development of BackEnd’s API'
    ],
    tools: [
      'React',
      'React Native',
      'Laravel',
      'MySQL',
      'PostgreSQL',
      'Java',
      'Objective-C',
      'Python'
    ],
    description:
      'For all the time I worked on 5 applications for Android and iOS. Over some of them as a Full-stack developer.'
  },
  {
    title: 'Application developer',
    company: 'NexWeel',
    dates: 'Mar. 2017 – Jan. 2018',
    address: '38 Rishelievskaya Street, Odessa, Ukraine',
    duties: ['Software development', 'WEB development'],
    tools: ['Delphi', 'JavaScript', 'PHP', 'MySQL'],
    description:
      'I worked in a team on developing a logistical software for a shipping company.'
  },
  {
    title: 'WEB Full-stack developer',
    company: 'Skylogic',
    dates: 'Apr. 2016 – Feb. 2017',
    address: '19/21 Book Lane, Odessa, Ukraine',
    duties: [
      'Development of new websites',
      'Maintenance of the old sites',
      "Development company's own CMS"
    ],
    tools: ['JavaScript', 'PHP', 'MySQL']
  },
  {
    title: 'IT Director',
    partTime: true,
    company: 'Gym Network "Champion"',
    dates: 'Sep. 2008 – Present',
    address: 'Odessa, Ukraine',
    duties: [
      'Mainly providing IT support and maintenance to the whole gym network',
      'Software development',
      'Designing and visualization of premises interiors'
    ],
    tools: [
      'Delphi',
      'TypeScript',
      'React',
      'PHP',
      'MySQL',
      'SQLite',
      'AutoCAD',
      '3D Max'
    ],
    description:
      'I developed a number of software for work with customers. I also developed a \n' +
      'bookkeeping software for fitness-cafe and many other different software for specific tasks. \n' +
      'All programs linked with ERP-system for monitoring gyms’ work flow in real time, cash flow, \n' +
      'payroll and salary transfer, expenses and viewing reports. Of course the website was on me.'
  },
  {
    title: 'IT Developer',
    partTime: true,
    company: 'Sports Federation Of Bodybuilding Of The Odessa Region',
    dates: 'Sep. 2010 – May. 2014',
    address: '31 Shevchenko Avenue, Odessa, Ukraine',
    duties: [
      'Software development',
      'Technical support for various sport competitions'
    ],
    tools: ['Delphi', 'JavaScript', 'PHP', 'MySQL', 'SQLite'],
    description:
      'I developed a software for managing the competition starting from preliminary \n' +
      'participants’ registration on website and ending with printing out award letters and issuing \n' +
      'full reports. For many years it has been used for competitions at regional level, several times \n' +
      'at national Ukrainian level and was presented on a championship in Saint Petersburg.'
  }
];

export default works;
