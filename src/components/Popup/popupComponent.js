import React from 'react';
import PropTypes from 'prop-types';

import Artist from './artistComponent';
import Alias from './aliasComponent';
import Url from './urlComponent';

const Popup = ({
  index,
  question,
  onPopupClose,
  onQuestionAnswer,
}) => (
  <div className="popup">
    <div className="box">
      <div className="box-header">
        <h3 className="title-group">
          <span className="title-addon">{index + 1}</span>
          <span className="title-addon">{question.title}</span>
        </h3>
        <button className="popup-close" type="button" onClick={onPopupClose}>
          <i className="fa fa-times">Close</i>
        </button>
      </div>
      <div className="box-inner">
        <ul className="list-inline">
          <Artist artist={question.artist} />
          <Alias alias={question.alias} />
          <Url url={question.url} />
        </ul>
      </div>
      <div className="box-footer btn-flex">
        <button className="btn-lg btn-correct" type="button" onClick={onQuestionAnswer(index, true)}>
          <i className="fa fa-circle-o">Correct</i>
        </button>
        <button className="btn-lg btn-wrong" type="button" onClick={onQuestionAnswer(index, false)}>
          <i className="fa fa-times">Wrong</i>
        </button>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onPopupClose: PropTypes.func.isRequired,
  onQuestionAnswer: PropTypes.func.isRequired,
};

export default Popup;
