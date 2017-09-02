import React from 'react';
import PropTypes from 'prop-types';

const Init = ({
  onMutchExcelChange,
  onMutchInit,
}) => (
  <div className="content">
    <div className="container">
      <div className="box">
        <div className="box-header">
          <h3 className="title">Init Settings</h3>
        </div>
        <div className="inner">
          <div className="form-group inline">
            <label htmlFor="excel-id" className="lb">
              <span className="text">Excel ID</span>
              <input
                type="text"
                id="excel-id"
                className="inp"
                onChange={onMutchExcelChange}
                placeholder="https://docs.google.com/spreadsheets/d/{ Your Excel ID }/edit"
              />
            </label>
          </div>
          <button className="btn" type="button" onClick={onMutchInit}>Get Datas</button>
        </div>
      </div>
    </div>
  </div>
);

Init.propTypes = {
  onMutchExcelChange: PropTypes.func.isRequired,
  onMutchInit: PropTypes.func.isRequired,
};

export default Init;
