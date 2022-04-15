import React from 'react';

import Section from 'components/Section';

import { personal } from 'data/texts';

import s from './styles.module.scss';

export default () => (
  <Section icon="pen-to-square" title="Personal profile" className={s.root}>
    <p>{personal}</p>
  </Section>
);
