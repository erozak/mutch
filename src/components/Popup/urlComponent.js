import React from 'react';
import PropTypes from 'prop-types';

const Url = ({
  url,
}) => {
  const spotify = url.get('spotify');
  const youtube = url.get('youtube');

  return (
    <li className="item">
      <div className="topic list-pull-8">Link</div>
      <div className="inner">
        <div className="btn-group">{ spotify && spotify.length > 0 &&
          (<a className="btn-bg" target="_blank" href={`https://open.spotify.com/track/${spotify}`}>
            <i className="fa fa-spotify"></i>
          </a>)
        } { youtube && youtube.length > 0 &&
          (<a className="btn-bg" target="_blank" href={`https://youtu.be/${youtube}`}>
            <i className="fa fa-youtube"></i>
          </a>)
        }
        </div>
      </div>
    </li>
  );
};

Url.propTypes = {
  url: PropTypes.object.isRequired,
};

export default Url;
