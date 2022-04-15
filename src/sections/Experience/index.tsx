import React from 'react';

import Section from 'components/Section';

import { experience } from 'data/texts';

import s from './styles.module.scss';

export default () => (
  <Section
    icon="plus-square"
    title="Additional employment and experience"
    className={s.root}
  >
    <p>{experience}</p>
  </Section>
);
