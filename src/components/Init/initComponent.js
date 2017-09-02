import React from 'react';
import PropTypes from 'prop-types';

const Init = ({
  onExcelIdChange,
  onMutchInit,
}) => (
  <div className="content">
    <div className="container">
      <div className="box">
        <div className="box-header">
          <h3 className="title">Init Settings</h3>
        </div>
        <div className="box-inner">
          <div className="input-group">
            <label htmlFor="excel-id" className="lb">Excel ID</label>
            <input type="text" id="excel-id" onChange={onExcelIdChange} />
          </div>
          <button className="btn" type="button" onClick={onMutchInit}>Get Datas</button>
        </div>
      </div>
    </div>
  </div>
);

Init.propTypes = {
  onExcelIdChange: PropTypes.func.isRequired,
  onMutchInit: PropTypes.func.isRequired,
};

export default Init;
