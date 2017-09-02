import React from 'react';
import PropTypes from 'prop-types';

import Artist from './artistComponent';
import Alias from './aliasComponent';
import Url from './urlComponent';

const Popup = ({
  index,
  title,
  artist,
  alias,
  url,
  onPopupClose,
  onQuestionAnswerCorrect,
  onQuestionAnswerWrong,
}) => (
  <div className="popup">
    <div className="box">
      <div className="box-header">
        <h3 className="title-group">
          <span className="title-addon">{index + 1}</span>
          <span className="title-addon">{title}</span>
        </h3>
        <button className="popup-close" type="button" onClick={onPopupClose}>
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div className="box-inner">
        <ul className="list-inline">
          <Artist artist={artist} />
          <Alias alias={alias} />
          <Url url={url} />
        </ul>
      </div>
      <div className="box-footer btn-flex">
        <button className="btn-lg btn-correct" type="button" onClick={onQuestionAnswerCorrect}>
          <i className="fa fa-circle-o"></i>
        </button>
        <button className="btn-lg btn-wrong" type="button" onClick={onQuestionAnswerWrong}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.object.isRequired,
  alias: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
  onPopupClose: PropTypes.func.isRequired,
  onQuestionAnswerCorrect: PropTypes.func.isRequired,
  onQuestionAnswerWrong: PropTypes.func.isRequired,
};

export default Popup;
