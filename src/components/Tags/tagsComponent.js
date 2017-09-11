import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';

const Tags = ({
  navShow,
  genres,
  mutchLoading,
  onGenrePickedDispatch,
  onNavToggle,
}) => (
  <div className="navbar">
    {
      mutchLoading && (
        <div className="loading-wrap">
          <div className="loading-square-single"></div>
        </div>
      )
    }
    {
      !mutchLoading && genres.size > 0 && (
        <button className="btn btn-collapse" onClick={onNavToggle}>
          <i className="fa fa-bars"></i>
        </button>
      )
    }
    <div className={navShow ? 'nav-ver collapsed' : 'nav-ver'}>{
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
  navShow: PropTypes.bool.isRequired,
  genres: PropTypes.object.isRequired,
  mutchLoading: PropTypes.bool.isRequired,
  onGenrePickedDispatch: PropTypes.func.isRequired,
  onNavToggle: PropTypes.func.isRequired,
};

export default Tags;
