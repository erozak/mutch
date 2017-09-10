import React from 'react';

import Dashboard from '../../containers/Dashboard';
import Tags from '../../containers/Tags';

const Aside = () => (
  <div className="aside frame-item">
    <header className="head">
      <h1 className="title">
        <span>MUTCH</span>
        <span className="subtitle">GuessSongs</span>
      </h1>
    </header>
    <Dashboard />
    <Tags />
  </div>
);


export default Aside;
