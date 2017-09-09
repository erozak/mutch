import { connect } from 'react-redux';
import { fromJS } from 'immutable';

import {
  onPopupClose,
  onQuestionAnswer,
} from '../../actions';
import Popup from '../../components/Popup';

const mapStateToProps = (state) => {
  const id = state.getIn(['ui', 'popup', 'question']);
  const question = state.getIn(['data', 'questions', id]) || fromJS({
    title: '',
    artist: [],
    url: {
      correct: 0,
      wrong: 0,
    },
    alias: [],
  });

  return {
    index: id,
    title: question.get('title'),
    artist: question.get('artists'),
    url: question.get('link'),
    alias: question.get('alias'),
  };
};

const mapDispatchToProps = dispatch => ({
  onPopupClose: () => dispatch(onPopupClose()),
  onQuestionAnswerCorrect: index => (
    () => {
      dispatch(onQuestionAnswer(index, true));
      dispatch(onPopupClose());
    }
  ),
  onQuestionAnswerWrong: index => (
    () => {
      dispatch(onQuestionAnswer(index, false));
      dispatch(onPopupClose());
    }
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { index } = stateProps;
  const {
    onQuestionAnswerCorrect,
    onQuestionAnswerWrong,
  } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onQuestionAnswerCorrect: onQuestionAnswerCorrect(index),
    onQuestionAnswerWrong: onQuestionAnswerWrong(index),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Popup);
