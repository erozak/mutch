import { connect } from 'react-redux';

import {
  onExcelIdChange,
  onMutchInit,
} from '../../actions';
import Init from '../../components/Init';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onExcelIdChange: excel => dispatch(onExcelIdChange(excel)),
  onMutchInit: () => dispatch(onMutchInit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Init);
