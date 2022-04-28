import React, { useEffect } from 'react';

import Main from 'containers/Main';
import Extra from 'containers/Extra';

import s from './App.module.scss';

function App() {
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme-initing');
  }, []);

  return (
    <div className={s.root}>
      <Main />
      <Extra />
    </div>
  );
}

export default App;
