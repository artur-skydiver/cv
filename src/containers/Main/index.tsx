import React from 'react';

import Contacts from 'sections/Contacts';
import Personal from 'sections/Personal';
import Works from 'sections/Works';
import Experience from 'sections/Experience';
import Education from 'sections/Education';
import Additional from 'sections/Additional';

import s from './styles.module.scss';

export default () => {
  return (
    <div className={s.root}>
      <div>
        <div>
          <h1>Artur Blieshcheiev</h1>
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
  );
};
