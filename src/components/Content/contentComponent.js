import React from 'react';
import PropTypes from 'prop-types';
import ShortId from 'shortid';

import QuestionItem from '../../containers/QuestionItem';

const Content = ({
  correct,
  wrong,
  genre,
  questions,
  onGenreRestart,
}) => (
  <div className="content">
    {
      questions.size ? (
        <div className="top">
          <h3 className="title">{genre}</h3>
          <div className="flex-sb">
            <dl className="list-hor">
              <dt className="topic">
                <i className="fa fa-circle-o"></i>
              </dt>
              <dd className="item">{correct}</dd>
              <dt className="topic">
                <i className="fa fa-times"></i>
              </dt>
              <dd className="item">{wrong}</dd>
            </dl>
            <button className="btn" type="button" onClick={onGenreRestart}>Restart</button>
          </div>
        </div>
      ) : ''
    }
    <div className="inner">
      <div className="container">
        <ul className="list-pain box-order-wrap">{
          questions.map((val, index) => (
            <QuestionItem
              key={ShortId.generate()}
              index={index}
              result={val.get('result')}
              title={val.get('title')}
              artists={val.get('artists')}
            />
          )).toJS()
        }</ul>
      </div>
    </div>
  </div>
);

Content.propTypes = {
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  onGenreRestart: PropTypes.func.isRequired,
};

export default Content;
