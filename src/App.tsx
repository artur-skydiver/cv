import React, { useEffect } from 'react';

import 'localization';

import Main from 'containers/Main';
import Extra from 'containers/Extra';

import s from './App.module.scss';

const github = 'https://github.com/artur-skydiver/cv';

function App() {
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme-initing');
  }, []);

  return (
    <div className={s.root}>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        title="This CV on GitHub"
        className={s.github}
      >
        {github}
      </a>
      <Main />
      <Extra />
    </div>
  );
}

export default App;
