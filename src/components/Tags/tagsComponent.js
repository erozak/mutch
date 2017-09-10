import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';

const Tags = ({
  genres,
  onGenrePickedDispatch,
}) => (
  <div className="navbar">
    <div className="nav-ver">{
      genres.map(val => (
        <button
          key={Shortid.generate()}
          type="button"
          className="link"
          onClick={onGenrePickedDispatch(val.get('name'))}
        >{
          val.get('name')
        }</button>
      )).toJS()
    }</div>
  </div>
);

Tags.propTypes = {
  genres: PropTypes.object.isRequired,
  onGenrePickedDispatch: PropTypes.func.isRequired,
};

export default Tags;
