import React from 'react';
import PropTypes from 'prop-types';

import Aside from '../Aside';
import Content from '../../containers/Content';

const Main = ({
  pickedGenre,
  genreLoading,
}) => (
  <div className="main frame-item">
    <Aside />
    { genreLoading
      ? (
        <div className="empty content flex-c">
          <div className="loading-wrap">
            <div className="loading-bar-0"></div>
            <div className="loading-bar-1"></div>
            <div className="loading-bar-2"></div>
            <div className="loading-bar-3"></div>
          </div>
        </div>
      ) : (pickedGenre
        ? (
          <Content genre={pickedGenre} />
        ) : (
          <div className="empty content flex-c">
            <div className="empty-text">Enter a excel and pick a genre to start the game.</div>
          </div>
        )
      )
    }
  </div>
);

Main.propTypes = {
  genreLoading: PropTypes.bool.isRequired,
};

export default Main;
