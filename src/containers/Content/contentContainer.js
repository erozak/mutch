import { connect } from 'react-redux';

import {
  onGenrePicked,
} from '../../actions';
import Content from '../../components/Content';

const mapStateToProps = state => ({
  amount: state.getIn(['data', 'amount']),
  answered: state
            .getIn(['data', 'questions'])
            .filter(val => val.get('result') !== undefined)
            .size,
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
  excel: state.getIn(['data', 'excel']),
});

const mapDispatchToProps = dispatch => ({
  onGenreRestart: (excel, gaming, genre) => (
    () => {
      let isDispatch = false;

      if (gaming) {
        const confirmText = 'Do you really want to restart the game in the genre ?';
        isDispatch = confirm(confirmText);
      } else isDispatch = true;

      return isDispatch ? dispatch(onGenrePicked(excel, genre)) : null;
    }
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { excel, gaming } = stateProps;
  const { genre } = ownProps;
  const { onGenreRestart } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onGenreRestart: onGenreRestart(excel, gaming, genre),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Content);
