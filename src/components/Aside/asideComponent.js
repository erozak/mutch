import React from 'react';
import PropTypes from 'prop-types';

const Aside = ({
  correct,
  wrong,
  onRestart,
}) => (
  <div className="aside frame-item">
    <h3 className="title">Scoring</h3>
    <div className="score flex-fluid">
      <div className="group">
        <div className="topic">
          <i className="fa fa-circle-o"></i>
        </div>
        <div className="inner">{correct}</div>
      </div>
      <div className="group">
        <div className="topic">
          <i className="fa fa-times"></i>
        </div>
        <div className="inner">{wrong}</div>
      </div>
    </div>
    <button className="aside-btn" type="button" onClick={onRestart}>Restart</button>
  </div>
);

Aside.propTypes = {
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Aside;
