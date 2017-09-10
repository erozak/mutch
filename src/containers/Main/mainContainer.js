import { connect } from 'react-redux';

import Main from '../../components/Main';

const mapStateToProps = state => ({
  pickedGenre: state.getIn(['data', 'pickedGenre']),
  genreLoading: state.getIn(['ui', 'spinner', 'genre']),
});

export default connect(
  mapStateToProps,
)(Main);
