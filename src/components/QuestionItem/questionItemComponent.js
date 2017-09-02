import React from 'react';
import PropTypes from 'prop-types';

const QuestionItem = ({
  index,
  result,
  title,
  artists,
  onPopup,
}) => {
  const resultIcon = result ? (
    <i className="fa fa-circle-o"></i>
  ) : (
    <i className="fa fa-times"></i>
  );
  const artistsString = artists.join(', ');

  return (
    <li className="item box-order">
      <div className="order correct">{resultIcon}</div>
      <div className="box">
        <div className="box-header">
          <h4 className="title">{title}</h4>
        </div>
        <div className="box-inner">{artistsString}</div>
      </div>
      <button className="box-btn" onClick={onPopup(index)}>
        <i className="fa fa-external-link-square">Popup</i>
      </button>
    </li>
  );
};

QuestionItem.propTypes = {
  index: PropTypes.number.isRequired,
  result: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  artists: PropTypes.object.isRequired,
  onPopup: PropTypes.func.isRequired,
};

export default QuestionItem;
