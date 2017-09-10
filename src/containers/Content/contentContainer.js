import { connect } from 'react-redux';

import {
  onGenrePicked,
} from '../../actions';
import Content from '../../components/Content';

const mapStateToProps = state => ({
  correct: state
            .getIn(['data', 'questions'])
            .filter(val => val.get('result'))
            .size,
  wrong: state
            .getIn(['data', 'questions'])
            .filter(val => val.get('result') !== undefined && !val.get('result'))
            .size,
  questions: state.getIn(['data', 'questions']),
  gaming: state.getIn(['data', 'gaming']),
});

const mapDispatchToProps = dispatch => ({
  onGenreRestart: genre => (
    () => {
      const confirmText = 'Do you really want to restart the game in the genre ?';
      const isConfirm = confirm(confirmText);

      return isConfirm ? dispatch(onGenrePicked(genre)) : null;
    }
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { genre } = ownProps;
  const { onGenreRestart } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onGenreRestart: onGenreRestart(genre),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Content);
