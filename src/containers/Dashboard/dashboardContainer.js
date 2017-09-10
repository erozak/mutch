import { connect } from 'react-redux';

import {
  onMutchExcelChange,
  onMutchInit as onMutchInitAction,
} from '../../actions';
import Dashboard from '../../components/Dashboard';

const mapStateToProps = state => ({
  excel: state.getIn(['data', 'excel']),
  isInit: state.getIn(['data', 'genres']).size || false,
});

const mapDispatchToProps = dispatch => ({
  onMutchExcelChange: event => dispatch(
    onMutchExcelChange(event.target.value),
  ),
  onMutchInit: (excel, isInit) => (
    () => {
      let isDispatch = false;
console.log(isInit)
      if (isInit) {
        const confirmText = 'To get new excel data will reset the game.\nDo you really want to get new excel data ?';
        isDispatch = confirm(confirmText);
      } else isDispatch = true;

      return isDispatch ? dispatch(onMutchInitAction(excel)) : null;
    }
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { excel, isInit } = stateProps;
  const { onMutchInit } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onMutchInit: onMutchInit(excel, isInit),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Dashboard);
