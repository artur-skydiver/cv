import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Transition from 'components/Transition';

import { experience } from 'data/texts';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.experience');
  return (
    <Section icon="plus-square" title={t('title')} className={s.root}>
      {l(experience).map((row: string, index: number) => (
        <Transition paragraph key={`experience-${index.toString()}`} text={row} />
      ))}
    </Section>
  );
};
