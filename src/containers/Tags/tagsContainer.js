import { connect } from 'react-redux';

import {
  onGenrePicked,
  onNavToggle,
} from '../../actions';
import Tags from '../../components/Tags';

const mapStateToProps = state => ({
  navShow: state.getIn(['ui', 'nav']),
  gaming: state.getIn(['data', 'gaming']),
  genres: state.getIn(['data', 'genres']),
  excel: state.getIn(['data', 'excel']),
  mutchLoading: state.getIn(['ui', 'spinner', 'mutch']),
});

const mapDispatchToProps = dispatch => ({
  onGenrePickedDispatch: (excel, gaming, genre) => {
    let ifDispatch = false;

    if (gaming) {
      const confirmText = 'Change genre will restart the game. Do you really want to change the genre ?';
      ifDispatch = confirm(confirmText);
    } else ifDispatch = true;

    return ifDispatch ? dispatch(onGenrePicked(excel, genre)) : null;
  },
  onNavToggle: () => dispatch(onNavToggle()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { excel, gaming } = stateProps;
  const { onGenrePickedDispatch } = dispatchProps;

  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onGenrePickedDispatch: genre => (
      () => onGenrePickedDispatch(excel, gaming, genre)
    ),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Tags);
