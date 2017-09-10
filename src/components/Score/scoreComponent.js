import React from 'react';
import PropTypes from 'prop-types';

const Score = ({
  correct,
  wrong,
  genre,
  onRestart,
}) => (
  <div className="popup">
    <div className="box">
      <div className="box-header">
        <h3 className="title">{genre}</h3>
      </div>
      <div className="box-inner">
        <div className="group">
          <strong className="topic">
            <i className="fa fa-circle-o"></i>
          </strong>
          <span className="inner">{correct}</span>
        </div>
        <div className="group">
          <strong className="topic">
            <i className="fa fa-times"></i>
          </strong>
          <span className="inner">{wrong}</span>
        </div>
      </div>
      <div className="box-footer btn-flex">
        <button className="btn-lg" type="button" onClick={onRestart}>
          <i className="fa fa-refresh gut"></i>Restart
        </button>
      </div>
    </div>
  </div>
);

Score.propTypes = {
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Score;
