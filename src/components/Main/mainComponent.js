import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Aside from '../../containers/Aside';
import Content from '../../containers/Content';
import Init from '../../containers/Init';

const Main = () => (
  <Router>
    <div className="main frame-item">
      <Aside />
      <Route exact path="/" component={Init} />
    </div>
  </Router>
);

export default Main;
