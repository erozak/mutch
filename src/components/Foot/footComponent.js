import React from 'react';

import {
  mePath,
  repoPath,
} from '../../models/path';

const Foot = () => (
  <div className="foot frame-item muted">
    <a href={repoPath} target="_blank" rel="noopener noreferrer">
      <i className="fa fa-github gut"></i>
    </a>
    <a href={mePath} target="_blank" rel="noopener noreferrer">Erozak</a>
    &nbsp;&copy;&nbsp;
    <time alt="2017">2017</time>
  </div>
);

export default Foot;
