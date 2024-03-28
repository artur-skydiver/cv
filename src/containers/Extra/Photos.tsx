import React, { useCallback, useState } from 'react';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
import cn from 'classnames';

import avatar from 'assets/photos/avatar.jpeg';
import airport from 'assets/photos/airport.jpeg';
import skydive from 'assets/photos/skydive.jpg';

import s from './styles.module.scss';

const PHOTOS: string[] = [avatar, airport, skydive];
const PHOTO_WIDTH = 775;
const PHOTO_HEIGHT = 1000;

type Props = {
  onGalleryToggle?: (show: boolean) => void;
  className?: string;
};

export default ({ onGalleryToggle, className }: Props) => {
  const [avatarActive, setAvatarActive] = useState(false);

  const updateGallery = (show: boolean) => {
    setAvatarActive(show);
    onGalleryToggle?.(show);
  };

  const onAvatarClick = useCallback(() => {
    const photoSwipe = new PhotoSwipe({
      mainClass: s.gallery,
      dataSource: PHOTOS.map(src => ({
        src,
        width: PHOTO_WIDTH,
        height: PHOTO_HEIGHT,
      })),
      zoom: false,
    });
    photoSwipe.on('init', () => updateGallery(true));
    photoSwipe.on('close', () => updateGallery(false));
    photoSwipe.init();
  }, []);

  return (
    <div className={className}>
      <div
        className={cn(s.avatar, { [s.avatarActive]: avatarActive })}
        style={{ backgroundImage: `url(${avatar})` }}
        onClick={onAvatarClick}
      />
    </div>
  );
};
