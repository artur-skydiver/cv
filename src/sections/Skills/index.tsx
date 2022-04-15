import React from 'react';

import Section from 'components/Section';
import Progress from 'components/Progress';

import skills from 'data/skills';

import s from './styles.module.scss';

export default () => (
  <Section icon="brain" title="Skills" align="center" className={s.root}>
    {skills.map(({ name, experience, percent }) => (
      <Progress
        key={`skill-${name}`}
        title={name}
        level={experience}
        percent={percent}
        className={s.progress}
      />
    ))}
  </Section>
);
