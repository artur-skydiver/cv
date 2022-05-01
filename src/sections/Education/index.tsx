import React from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';

import Section from 'components/Section';

import education from 'data/education';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.education');
  return (
    <Section icon="graduation-cap" title={t('title')} className={s.root}>
      {education.map(({ name, dates, subject }) => {
        const langName = l(name);
        return (
          <div key={`education-${langName}`} className={s.row}>
            <h3>{langName}</h3>
            <div className={cn('row', s.texts)}>
              <div className={s.dates}>{dates}</div>
              <div className={cn('grow1', s.subject)}>{l(subject)}</div>
            </div>
          </div>
        );
      })}
    </Section>
  );
};
