import React from 'react';

import useMedia from 'utils/media';

import Contacts from 'sections/Contacts';
import Personal from 'sections/Personal';
import Works from 'sections/Works';
import Experience from 'sections/Experience';
import Education from 'sections/Education';
import Additional from 'sections/Additional';
import References from 'sections/References';

import s from './styles.module.scss';

const Name = () => {
  const { isDesktop, isLandscape } = useMedia();
  const needName = isDesktop || isLandscape;
  return needName ? <h1>Artur Blieshcheiev</h1> : null;
};

const ReferencesBlock = () => {
  const { isMobile, isPortrait } = useMedia();
  const needReferences = isMobile || isPortrait;
  return needReferences ? <References className={s.root} /> : null;
};

export default () => {
  return (
    <>
      <ReferencesBlock />
      <div className={s.root}>
        <div>
          <div>
            <Name />
            <Contacts />
          </div>
          <div />
        </div>
        <Personal />
        <Works />
        <Experience />
        <Education />
        <Additional />
      </div>
    </>
  );
};
