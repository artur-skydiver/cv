import React, { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';

type IconSet = 'regular' | 'solid' | 'brands';

type Props = {
  icon: IconProp;
  set?: IconSet;
  style?: CSSProperties;
  className?: string;
};

export type { IconProp, IconSet };

export default ({ icon, set, style, className }: Props) => {
  if (typeof icon === 'string') {
    const key = `fa${icon
      .split('-')
      .map(item => item[0].toUpperCase() + item.substring(1))
      .join('')}`;
    switch (set) {
      case 'regular':
        icon = regular.far[key];
        break;
      case 'solid':
        icon = solid.fas[key];
        break;
      case 'brands':
        icon = brands.fab[key];
        break;
      default:
        icon = regular.far[key] || solid.fas[key] || brands.fab[key];
    }
  }
  return <FontAwesomeIcon icon={icon} style={style} className={className} />;
};
