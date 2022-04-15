import React from 'react';
import cn from 'classnames';

import s from './styles.module.scss';

type Props = {
  title?: string;
  level?: string;
  percent: number;
  className?: string;
};

export default ({ title, level, percent, className }: Props): JSX.Element => (
  <div className={className}>
    {!!(title || level) && (
      <div className={cn('row', s.texts)}>
        <div className={s.title}>{title}</div>
        <div className={s.level}>{level}</div>
      </div>
    )}
    <div className={s.progress}>
      <div style={{ width: `${percent}%` }} />
    </div>
  </div>
);
