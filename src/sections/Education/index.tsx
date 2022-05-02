import React from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Transition from 'components/Transition';

import education from 'data/education';

import s from './styles.module.scss';

export default () => {
  const { t } = useLocales('sections.education');
  return (
    <Section icon="graduation-cap" title={t('title')} className={s.root}>
      {education.map(({ name, dates, subject }, index) => (
        <div key={`education-${index.toString()}`} className={s.row}>
          <Transition text={name} />
          <div className={cn('row', s.texts)}>
            <div className={s.dates}>{dates}</div>
            <Transition className={cn('grow1', s.subject)} text={subject} />
          </div>
        </div>
      ))}
    </Section>
  );
};
