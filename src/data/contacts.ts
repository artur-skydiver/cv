import {
  faViber,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

export default {
  birth: '05 October 1990',
  address: 'Odessa, Ukraine, 65072',
  email: 'bleshcheev90@gmail.com',
  phones: [
    {
      number: '+38 063 135-96-06',
      messengers: [
        { icon: faViber, color: '#ae4b85' },
        { icon: faWhatsapp, color: '#009847' },
        { icon: faTelegram, color: '#2ea6e1' }
      ]
    },
    '+38 048 798-08-84'
  ],
  socials: [
    {
      icon: faLinkedin,
      text: 'linkedin.com/in/blieshcheiev',
      link: 'https://www.linkedin.com/in/blieshcheiev/'
    },
    {
      icon: faInstagram,
      text: 'instagram.com/arthur.skydiver',
      link: 'https://instagram.com/arthur.skydiver'
    },
    {
      icon: faFacebook,
      text: 'facebook.com/arthur.skydiver',
      link: 'https://www.facebook.com/arthur.skydiver'
    },
    {
      icon: faTelegram,
      text: '@Arthur_od',
      link: 'https://t.me/Arthur_od'
    }
  ]
};
