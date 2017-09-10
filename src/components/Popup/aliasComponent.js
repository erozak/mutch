import React from 'react';
import PropTypes from 'prop-types';
import ShortId from 'shortid';

const Alias = ({
  alias,
}) => {
  const topicClass = (alias.filter(val => val.length > 0).size > 1) ? 'topic list-pull-8' : 'topic';
  const items = ((alias.filter(val => val.length > 0).size > 1)
    ? alias.filter(val => val.length > 0).map(val => (
      <div key={ShortId.generate()} className="tag">{val}</div>
    ))
    : alias.get(0)
  );

  return (
    <li className="item">
      <div className={topicClass}>Alias</div>
      <div className="item">{items}</div>
    </li>
  );
};

Alias.propTypes = {
  alias: PropTypes.object.isRequired,
};

export default Alias;
