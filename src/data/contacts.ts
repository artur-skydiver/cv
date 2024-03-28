import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {
  faViber,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

import type { Locales } from 'localization';

type PhoneMessenger = {
  icon: IconDefinition;
  color: string;
};

type Phone =
  | string
  | {
      number: string;
      messengers: PhoneMessenger[];
    };

type Social = {
  icon: IconDefinition;
  text: string;
  link: string;
};

interface Contacts {
  birth: Locales;
  address: Locales;
  email: string;
  phones: Phone[];
  socials: Social[];
}

const contacts: Contacts = {
  birth: { en: '05 October 1990', ru: '05 Октября 1990', uk: '05 Жовтня 1990' },
  address: {
    en: 'Odessa, Ukraine, 65072',
    ru: 'Одесса, Украина, 65072',
    uk: 'Одеса, Україна, 65072',
  },
  email: 'bleshcheev90@gmail.com',
  phones: [
    {
      number: '+38 063 135-96-06',
      messengers: [
        { icon: faViber, color: '#ae4b85' },
        { icon: faWhatsapp, color: '#009847' },
      ],
    },
    '+38 048 798-08-84',
  ],
  socials: [
    {
      icon: faLinkedin,
      text: 'linkedin.com/in/blieshcheiev',
      link: 'https://www.linkedin.com/in/blieshcheiev/',
    },
    {
      icon: faInstagram,
      text: 'instagram.com/arthur.skydiver',
      link: 'https://instagram.com/arthur.skydiver',
    },
    {
      icon: faFacebook,
      text: 'facebook.com/arthur.skydiver',
      link: 'https://www.facebook.com/arthur.skydiver',
    },
    {
      icon: faTelegram,
      text: '@Arthur_od',
      link: 'https://t.me/Arthur_od',
    },
  ],
};

export default contacts;
