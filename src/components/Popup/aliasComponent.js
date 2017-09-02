import React from 'react';
import PropTypes from 'prop-types';

const Alias = ({
  alias,
}) => {
  const topicClass = (alias.size > 1) ? 'topic list-pull-8' : 'topic';
  const items = ((alias.size > 1)
    ? alias.get(0) : alias.map(val => (
      <div className="tag">{val}</div>
    ))
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