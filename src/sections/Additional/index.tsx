import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Transition from 'components/Transition';

import { additional } from 'data/texts';

import s from './styles.module.scss';

export default () => {
  const { t } = useLocales('sections.additional');
  return (
    <Section icon="info-circle" title={t('title')} className={s.root}>
      <Transition paragraph text={additional} />
    </Section>
  );
};
