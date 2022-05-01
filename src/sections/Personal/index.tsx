import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';

import { personal } from 'data/texts';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.personal');
  return (
    <Section icon="pen-to-square" title={t('title')} className={s.root}>
      <p>{l(personal)}</p>
    </Section>
  );
};
