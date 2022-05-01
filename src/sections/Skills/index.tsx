import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Progress from 'components/Progress';

import skills from 'data/skills';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.skills');
  return (
    <Section icon="brain" title={t('title')} align="center" className={s.root}>
      {skills.map(({ name, experience, percent }) => (
        <Progress
          key={`skill-${name}`}
          title={name}
          level={l(experience)}
          percent={percent}
          className={s.progress}
        />
      ))}
    </Section>
  );
};
