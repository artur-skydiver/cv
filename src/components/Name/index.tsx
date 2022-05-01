import React from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';

import s from './styles.module.scss';

type Props = {
  className?: string;
};

export default ({ className }: Props): JSX.Element => {
  const { l } = useLocales();
  const langName = l({
    en: 'Artur Blieshcheiev',
    ru: 'Артур Блещеев',
    uk: 'Артур Блєщеєв'
  });
  return <h1 className={cn(s.root, className)}>{langName}</h1>;
};
