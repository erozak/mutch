import { connect } from 'react-redux';

import {
  onGenrePicked,
} from '../../actions';
import Tags from '../../components/Tags';

const mapStateToProps = state => ({
  gaming: state.getIn(['data', 'gaming']),
  genres: state.getIn(['data', 'genres']),
});

const mapDispatchToProps = dispatch => ({
  onGenrePickedDispatch: (gaming, genre) => {
    let ifDispatch = false;

    if (gaming) {
      const confirmText = 'Change genre will restart the game. Do you really want to change the genre ?';
      ifDispatch = confirm(confirmText);
    } else ifDispatch = true;

    return ifDispatch ? dispatch(onGenrePicked(genre)) : null;
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { gaming } = stateProps;
  const { onGenrePickedDispatch } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onGenrePickedDispatch: genre => (
      () => onGenrePickedDispatch(gaming, genre)
    ),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Tags);
