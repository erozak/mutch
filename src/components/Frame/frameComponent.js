import React from 'react';

import Popup from '../Popup';
import Head from '../Head';
import Main from '../Main';
import Foot from '../Foot';


const Frame = () => (
  <div className="frame">
    <Popup />
    <Head />
    <Main />
    <Foot />
  </div>
);

export default Frame;
