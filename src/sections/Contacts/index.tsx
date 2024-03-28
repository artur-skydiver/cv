import React, { PropsWithChildren } from 'react';

import { Locales } from 'localization';
import { getLinkFromEmail, getLinkFromPhone } from 'utils/maps';

import Icon, { IconProp } from 'components/Icon';
import Transition from 'components/Transition';

import contacts from 'data/contacts';

import s from './styles.module.scss';

const { birth, address, email, phones, socials } = contacts;

type RowProps = {
  icon: IconProp;
  text?: string | Locales;
  link?: {
    href: string;
    text: string;
  };
};

const Row: React.FC<PropsWithChildren<RowProps>> = ({
  icon,
  text,
  link,
  children,
}) => (
  <li className={s.row}>
    <Icon icon={icon} set="solid" className={s.icon} />
    <div>
      {children ||
        (link ? (
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.text}
          </a>
        ) : (
          <Transition text={text} />
        ))}
    </div>
  </li>
);

export default () => (
  <div className={s.root}>
    <ul>
      <Row icon="calendar-days" text={birth} />
      <Row icon="map-location" text={address} />
      <Row
        icon="envelope"
        link={{ href: getLinkFromEmail(email), text: email }}
      />
      <Row icon="phone-flip">
        {phones.map((phone, index) => {
          let number = '';
          let messengers;
          if (typeof phone === 'string') {
            number = phone;
          } else {
            number = phone.number;
            messengers = phone.messengers;
          }
          return (
            <span key={`contacts-phone-${number}`} className={s.phone}>
              <a href={getLinkFromPhone(number)}>{number}</a>
              {messengers?.map(({ icon, color }, mesInd) => (
                <Icon
                  icon={icon}
                  style={{ color }}
                  className={s.phoneMessengerIcon}
                  key={`contacts-phone-${number}-${mesInd.toString()}`}
                />
              ))}
              {index < phones.length - 1 && <span>,</span>}
            </span>
          );
        })}
      </Row>
    </ul>
    <ul className={s.socials}>
      {socials.map(({ icon, text, link }) => (
        <Row
          icon={icon}
          link={{ href: link, text }}
          key={`contacts-socials-${text}`}
        />
      ))}
    </ul>
  </div>
);
