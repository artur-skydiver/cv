import React from 'react';
import cn from 'classnames';

import { getLinkFromEmail, getLinkFromPhone } from 'utils/maps';

import Section from 'components/Section';
import Icon, { IconProp } from 'components/Icon';

import references from 'data/references';

import s from './styles.module.scss';

type RowProps = {
  icon: IconProp;
  text?: string;
  link?: {
    href: string;
    text: string;
  };
};

const Row: React.FC<RowProps> = ({ icon, text, link }) => (
  <li className={cn('row', s.row)}>
    <Icon icon={icon} set="solid" className={s.rowIcon} />
    <div className="grow1">
      {link ? (
        <a href={link.href} target="_blank" rel="noreferrer">
          {link.text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  </li>
);

type Props = {
  className?: string;
};

export default ({ className }: Props) => (
  <Section
    icon="thumbs-up"
    title="References"
    align="center"
    className={cn(s.root, className)}
    contentClassName={s.content}
  >
    {references.map(({ name, position, company, phone, email }) => (
      <div key={`reference-${company}-${name}`} className={s.reference}>
        <h3 className={s.name}>{name}</h3>
        <ul>
          <Row icon="briefcase" text={position} />
          <Row icon="building" text={company} />
          <Row
            icon="phone"
            link={{ text: phone, href: getLinkFromPhone(phone) }}
          />
          <Row
            icon="envelope"
            link={{ text: email, href: getLinkFromEmail(email) }}
          />
        </ul>
      </div>
    ))}
  </Section>
);
