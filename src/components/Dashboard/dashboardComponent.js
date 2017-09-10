import React from 'react';
import PropTypes from 'prop-types';

import { authPath } from '../../models/path';

const Init = ({
  onMutchExcelChange,
  onMutchInit,
}) => (
  <div className="dashboard">
    <div className="form-group">
      <input
        type="text"
        className="inp-block"
        onChange={onMutchExcelChange}
        placeholder="Excel ID"
        value="1Izf1MmDHMLcULwUztQ8EuTTOTvTgl3Y1LcamjRh7mLY"
      />
    </div>
    <div className="flex-sb">
      <a href={authPath} className="btn" rel="noreferrer" target="_blank">Auth</a>
      <button className="btn" type="button" onClick={onMutchInit}>Get Datas</button>
    </div>
  </div>
);

Init.propTypes = {
  onMutchExcelChange: PropTypes.func.isRequired,
  onMutchInit: PropTypes.func.isRequired,
};

export default Init;
