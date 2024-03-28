import React from 'react';
import cx from 'classnames';

import Icon, { IconProp, IconSet } from 'components/Icon';

import s from './styles.module.scss';
import Transition from '../Transition';

type Props = {
  caption?: string;
  icon?: IconProp;
  iconSet?: IconSet;
  className?: string;
  onClick?: () => void;
};

export default ({
  caption,
  icon,
  iconSet,
  className,
  onClick,
}: Props): JSX.Element => {
  return (
    <button type="button" className={cx(s.root, className)} onClick={onClick}>
      <Transition text={caption} node="div" row>
        <div className={s.content}>
          {icon && <Icon icon={icon} set={iconSet} className={s.icon} />}
          {caption && <span>{caption}</span>}
        </div>
      </Transition>
    </button>
  );
};
