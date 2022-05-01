import React from 'react';
import cn from 'classnames';

import ThemeSwitcher from 'components/ThemeSwitcher';
import LanguageSwitcher from 'components/LanguageSwitcher';

import s from './styles.module.scss';

type Props = {
  className?: string;
};

export default ({ className }: Props): JSX.Element => {
  return (
    <div className={cn(s.root, className)}>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};
