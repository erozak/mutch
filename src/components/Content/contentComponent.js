import React from 'react';
import PropTypes from 'prop-types';
import ShortId from 'shortid';

import QuestionItem from '../../containers/QuestionItem';

const Content = ({
  genre,
  amount,
  questions,
}) => (
  <div className="content">
    <div className="container">
      <div className="box">
        <div className="box-header">
          <h3 className="title">Guest List</h3>
        </div>
        <div className="box-inner">
          <dl className="list-hor">
            <dt className="topic">Genre</dt>
            <dd className="item">{genre}</dd>
            <dt className="topic">Amount</dt>
            <dd className="item">{amount}</dd>
          </dl>
        </div>
      </div>
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
);

Content.propTypes = {
  genre: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  questions: PropTypes.object.isRequired,
};

export default Content;
