import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../containers/Popup';
import Head from '../../containers/Head';
import Main from '../Main';
import Foot from '../Foot';

const Frame = ({
  pickedQuestion,
}) => (
  <div className="frame">
    {
      pickedQuestion >= 0 ? (<Popup />) : ''
    }
    <Head />
    <Main />
    <Foot />
  </div>
);

Frame.propTypes = {
  pickedQuestion: PropTypes.number.isRequired,
};

export default Frame;
