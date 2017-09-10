import React from 'react';
import PropTypes from 'prop-types';
import ShortId from 'shortid';

import Score from '../Score';
import QuestionItem from '../../containers/QuestionItem';

const Content = ({
  answered,
  amount,
  correct,
  wrong,
  gaming,
  genre,
  questions,
  onGenreRestart,
}) => (
  <div className="content">
    { !gaming && (
      <Score
        correct={correct}
        wrong={wrong}
        genre={genre}
        onRestart={onGenreRestart}
      />
    )}
    { questions.size && (
      <div className="top">
        <h3 className="title">{genre}</h3>
        <div className="flex-sb">
          <div className="group">
            <span>{answered}</span>/<span>{amount}</span>
          </div>
          <button className="btn" type="button" onClick={onGenreRestart}>Restart</button>
        </div>
      </div>
    )}
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
  answered: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  gaming: PropTypes.bool.isRequired,
  genre: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  onGenreRestart: PropTypes.func.isRequired,
};

export default Content;
