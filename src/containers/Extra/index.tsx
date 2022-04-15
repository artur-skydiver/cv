import React, { useEffect, useCallback, useRef } from 'react';

import Skills from 'sections/Skills';
import Languages from 'sections/Languages';
import References from 'sections/References';

import Photos from './Photos';

import s from './styles.module.scss';

export default () => {
  const prevScrollTopRef = useRef<number>(0);
  const scrollBarWidthRef = useRef<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(({ currentTarget }) => {
    const { scrollY } = currentTarget;
    const delta = scrollY - prevScrollTopRef.current;
    const root = contentRef.current as HTMLDivElement;
    const content = root.childNodes[0] as HTMLDivElement;
    const rootHeight = root.offsetHeight;
    const contentHeight = content.offsetHeight;
    const maxMarginTop = rootHeight - contentHeight;
    const currentMarginTop = parseInt(content.style.marginTop, 10) || 0;
    let newMarginTop = currentMarginTop - delta;
    if (newMarginTop < maxMarginTop) {
      newMarginTop = maxMarginTop;
    } else if (newMarginTop > 0) {
      newMarginTop = 0;
    }
    content.style.marginTop = `${newMarginTop}px`;
    prevScrollTopRef.current = scrollY;
  }, []);

  useEffect(() => {
    scrollBarWidthRef.current = window.innerWidth - document.body.offsetWidth;
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onGalleryToggle = useCallback((show: boolean) => {
    (contentRef.current as HTMLDivElement).style.paddingRight = `${
      show ? scrollBarWidthRef.current : 0
    }px`;
  }, []);

  return (
    <div className={s.root} ref={contentRef}>
      <div className={s.content}>
        <Photos
          onGalleryToggle={onGalleryToggle}
          className={s.avatarContainer}
        />
        <Skills />
        <Languages />
        <References />
      </div>
    </div>
  );
};
