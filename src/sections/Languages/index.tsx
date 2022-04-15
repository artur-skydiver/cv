import React from 'react';

import Section from 'components/Section';
import Progress from 'components/Progress';

import languages from 'data/languages';

import s from './styles.module.scss';

export default () => (
  <Section icon="language" title="Languages" align="center" className={s.root}>
    {languages.map(({ name, level, percent }) => (
      <Progress
        key={`language-${name}`}
        title={name}
        level={level}
        percent={percent}
        className={s.progress}
      />
    ))}
  </Section>
);
