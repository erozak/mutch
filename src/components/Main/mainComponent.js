import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Content from '../Content';
import Aside from '../Aside';

const Main = () => (
  <Router>
    <div className="main frame-item">
      <Aside />
      <Route exact path="/" component={Content} />
      <Content />
    </div>
  </Router>
);

export default Main;
