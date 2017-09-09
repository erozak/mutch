import React from 'react';
import PropTypes from 'prop-types';
import ShortId from 'shortid';

const Artist = ({
  artist,
}) => {
  const topicClass = (artist.size > 1) ? 'topic list-pull-8' : 'topic';
  const topicTitle = (artist.size > 1) ? 'Artists' : 'Artist';
  const items = ((artist.size > 1)
    ? artist.map(val => (
      <div key={ShortId.generate()} className="tag">{val}</div>
    ))
    : artist.get(0)
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
