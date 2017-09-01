import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({
  artist,
}) => {
  const topicClass = (artist.length > 1) ? 'topic list-pull-8' : 'topic';
  const topicTitle = (artist.length > 1) ? 'Artists' : 'Artist';
  const items = ((artist.length > 1)
    ? artist[0] : artist.map(val => (
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
  artist: PropTypes.array.isRequired,
};

export default Artist;
