import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../containers/Popup';
import Head from '../../containers/Head';
import Main from '../../containers/Main';
import Foot from '../Foot';

const Frame = ({
  popup,
}) => (
  <div className="frame">
    {
      popup ? (<Popup />) : ''
    }
    <Head />
    <Main />
    <Foot />
  </div>
);

Frame.propTypes = {
  popup: PropTypes.bool.isRequired,
};

export default Frame;
