import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Progress from 'components/Progress';

import languages from 'data/languages';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.languages');
  return (
    <Section
      icon="language"
      title={t('title')}
      align="center"
      className={s.root}
    >
      {languages.map(({ name, level, percent }, index) => (
        <Progress
          key={`language-${index.toString()}`}
          title={l(name)}
          level={l(level)}
          percent={percent}
          className={s.progress}
        />
      ))}
    </Section>
  );
};
