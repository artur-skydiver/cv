import React, { useCallback, useEffect, useState } from 'react';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
import cn from 'classnames';

import avatar from 'assets/photos/avatar.jpeg';
import airport from 'assets/photos/airport.jpeg';
import skydive from 'assets/photos/skydive.jpg';

import s from './styles.module.scss';

const images: ViewType[] = [
  { source: avatar },
  { source: airport },
  { source: skydive }
];

type Props = {
  onGalleryToggle?: (show: boolean) => void;
  className?: string;
};

export default ({ onGalleryToggle, className }: Props) => {
  const [showGallery, setShowGallery] = useState(false);

  const onOpenGallery = useCallback(() => setShowGallery(true), []);
  const onCloseGallery = useCallback(() => setShowGallery(false), []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    onGalleryToggle && onGalleryToggle(showGallery);
  }, [showGallery]);

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className={cn(s.avatar, { [s.avatarActive]: showGallery })}
        style={{ backgroundImage: `url(${avatar})` }}
        onClick={onOpenGallery}
      />
      <ModalGateway>
        {showGallery && (
          <Modal
            allowFullscreen={false}
            closeOnBackdropClick
            closeOnEsc
            onClose={onCloseGallery}
          >
            <Carousel views={images} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
