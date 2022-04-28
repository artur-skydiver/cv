import React from 'react';

import useMedia from 'utils/media';

import Options from 'containers/Options';

import Contacts from 'sections/Contacts';
import Personal from 'sections/Personal';
import Works from 'sections/Works';
import Experience from 'sections/Experience';
import Education from 'sections/Education';
import Additional from 'sections/Additional';
import References from 'sections/References';

import s from './styles.module.scss';

const Header = () => {
  const { isDesktop, isLandscape } = useMedia();
  const needHeader = isDesktop || isLandscape;
  if (!needHeader) return null;
  return (
    <div className={s.header}>
      <h1 className={s.name}>Artur Blieshcheiev</h1>
      <Options />
    </div>
  );
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
        <Header />
        <Contacts />
        <Personal />
        <Works />
        <Experience />
        <Education />
        <Additional />
      </div>
    </>
  );
};
