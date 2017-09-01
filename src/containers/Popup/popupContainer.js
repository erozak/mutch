import { connect } from 'react-redux';

import {
  onPopupClose,
  onQuestionAnswer,
} from '../../actions';
import popup from '../../components/Popup';

const mapStateToProps = (state) => {
  const id = state.getIn(['ui', 'pickedQuestion']);

  return {
    index: id,
    question: state.getIn(['data', 'questions', id]),
  };
};

const mapDispatchToProps = dispatch => ({
  onPopupClose: () => dispatch(onPopupClose()),
  onQuestionAnswer: (index, answer) => dispatch(
    onQuestionAnswer(index, answer),
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(popup);
