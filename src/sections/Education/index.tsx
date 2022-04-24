import React from 'react';
import cn from 'classnames';

import Section from 'components/Section';

import education from 'data/education';

import s from './styles.module.scss';

export default () => (
  <Section icon="graduation-cap" title="Education" className={s.root}>
    {education.map(({ name, dates, subject }) => (
      <div key={`education-${name}`} className={s.row}>
        <h3>{name}</h3>
        <div className={cn('row', s.texts)}>
          <div className={s.dates}>{dates}</div>
          <div className={cn('grow1', s.subject)}>{subject}</div>
        </div>
      </div>
    ))}
  </Section>
);
