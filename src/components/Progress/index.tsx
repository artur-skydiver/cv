import React from 'react';
import cn from 'classnames';

import Transition from 'components/Transition';

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
        <Transition className={s.title} text={title} />
        <Transition className={s.level} text={level} row right />
      </div>
    )}
    <div className={s.progress}>
      <div style={{ width: `${percent}%` }} />
    </div>
  </div>
);
