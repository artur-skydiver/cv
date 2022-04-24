import React from 'react';
import cn from 'classnames';

import Icon, { IconProp, IconSet } from 'components/Icon';

import s from './styles.module.scss';

type Props = {
  icon: IconProp;
  iconSet?: IconSet;
  title: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  contentClassName?: string;
  children: JSX.Element | JSX.Element[];
};

export default ({
  icon,
  iconSet,
  title,
  align = 'left',
  className,
  contentClassName,
  children
}: Props): JSX.Element => (
  <div className={cn(s.root, className)}>
    <div className={cn(s.title, s[align])}>
      <Icon icon={icon} set={iconSet} className={s.titleIcon} />
      <h2 className={s.titleText}>{title}</h2>
    </div>
    <div className={contentClassName}>{children}</div>
  </div>
);
