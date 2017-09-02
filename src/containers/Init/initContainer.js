import { connect } from 'react-redux';

import {
  onMutchExcelChange,
  onMutchInit as onMutchInitAction,
} from '../../actions';
import Init from '../../components/Init';

const mapStateToProps = state => ({
  excel: state.getIn(['data', 'excel']),
});

const mapDispatchToProps = dispatch => ({
  onMutchExcelChange: event => dispatch(
    onMutchExcelChange(event.target.value),
  ),
  onMutchInit: excel => (
    () => dispatch(onMutchInitAction(excel))
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { excel } = stateProps;
  const { onMutchInit } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onMutchInit: onMutchInit(excel),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Init);
