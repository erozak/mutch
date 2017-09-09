import { connect } from 'react-redux';

import {
  onPopupOpen,
} from '../../actions';
import QuestionItem from '../../components/QuestionItem';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onPopup: index => (
    () => dispatch(onPopupOpen(index))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionItem);
