interface Institution {
  name: string;
  dates: string;
  subject: string;
}

const education: Institution[] = [
  {
    name: 'I.I. Mechnikov Odessa National University',
    dates: '2007–2013',
    subject: 'Master of Science, Economist cybernetician'
  },
  {
    name: 'Course on Computer Graphics',
    dates: '2006–2007',
    subject: '2D graphics, 3D modeling'
  },
  {
    name: 'Course on Software Development',
    dates: '2005–2007',
    subject: 'Pascal, Delphi'
  },
  {
    name: 'Course on WEB Development',
    dates: '2006',
    subject: 'HTML, CSS, JS, PHP'
  }
];

export default education;
