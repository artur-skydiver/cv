import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';

import { additional } from 'data/texts';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.additional');
  return (
    <Section icon="info-circle" title={t('title')} className={s.root}>
      <p>{l(additional)}</p>
    </Section>
  );
};
