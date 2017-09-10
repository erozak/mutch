import React from 'react';

import Aside from '../Aside';
import Content from '../../containers/Content';

const Main = ({
  pickedGenre,
}) => (
  <div className="main frame-item">
    <Aside />
    {
      pickedGenre ? (
        <Content genre={pickedGenre} />
      ) : (
        <div className="empty content flex-c">
          <div className="empty-text">Enter a excel and pick a genre to start the game.</div>
        </div>
      )
    }
  </div>
);

export default Main;
