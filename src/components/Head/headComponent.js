import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';

const Head = ({
  genres,
  onGenrePicked,
}) => (
  <div className="head frame-item navbar">
    <h1 className="title">
      <span>MUTCH</span>
      <span className="subtitle">GuestWahtItIs</span>
    </h1>
    <nav className="nav">{
      genres.map(val => (
        <button
          key={Shortid.generate()}
          type="button"
          className="btn link"
          onClick={onGenrePicked(val.get('name'))}
        >{
          val.get('name')
        }</button>
      )).toJS()
    }</nav>
  </div>
);

Head.propTypes = {
  genres: PropTypes.object.isRequired,
  onGenrePicked: PropTypes.func.isRequired,
};

export default Head;
