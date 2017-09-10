import React from 'react';
import PropTypes from 'prop-types';

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
      />
    </div>
    <button className="btn" type="button" onClick={onMutchInit}>Get Datas</button>
  </div>
);

Init.propTypes = {
  onMutchExcelChange: PropTypes.func.isRequired,
  onMutchInit: PropTypes.func.isRequired,
};

export default Init;
