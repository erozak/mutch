import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({
  artist,
}) => {
  const topicClass = (artist.size > 1) ? 'topic list-pull-8' : 'topic';
  const topicTitle = (artist.size > 1) ? 'Artists' : 'Artist';
  const items = ((artist.size > 1)
    ? artist.get(0) : artist.map(val => (
      <div className="tag">{val}</div>
    ))
  );

  return (
    <li className="item">
      <div className={topicClass}>{topicTitle}</div>
      <div className="item">{items}</div>
    </li>
  );
};

Artist.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default Artist;
