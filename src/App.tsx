import React from 'react';

import Main from 'containers/Main';
import Extra from 'containers/Extra';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.root}>
      <Main />
      <Extra />
    </div>
  );
}

export default App;
