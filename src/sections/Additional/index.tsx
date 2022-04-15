import React from 'react';

import Section from 'components/Section';

import { additional } from 'data/texts';

import s from './styles.module.scss';

export default () => (
  <Section icon="info-circle" title="Additional information" className={s.root}>
    <p>{additional}</p>
  </Section>
);
