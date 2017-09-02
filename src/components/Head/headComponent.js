import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Head = ({
  genres,
  onGenreChange,
}) => (
  <div className="head frame-item navbar">
    <h1 className="title">
      <span>MUTCH</span>
      <span className="subtitle">GuestWahtItIs</span>
    </h1>
    <nav className="nav">{
      genres.map(val => (
        <Link className="link" onCLick={onGenreChange(val)}>{val}</Link>
      )).toJS()
    }</nav>
  </div>
);

Head.propTypes = {
  genres: PropTypes.object.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default Head;
