import React from 'react';
import PropTypes from 'prop-types';

import Aside from '../../containers/Aside';
import Content from '../../containers/Content';
import Init from '../../containers/Init';

const Main = ({
  pickedGenre,
}) => (
  <div className="main frame-item">
    <Aside />
    { pickedGenre.length > 0 ? <Content genre={pickedGenre} /> : (<Init />) }
  </div>
);

Main.propTypes = {
  pickedGenre: PropTypes.string.isRequired,
};

export default Main;
