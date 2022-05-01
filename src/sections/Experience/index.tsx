import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';

import { experience } from 'data/texts';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.experience');
  return (
    <Section icon="plus-square" title={t('title')} className={s.root}>
      {l(experience).map((row: string, index: number) => (
        <p key={`experience-${index.toString()}`}>{row}</p>
      ))}
    </Section>
  );
};
