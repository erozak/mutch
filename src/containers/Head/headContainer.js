import { connect } from 'react-redux';

import {
  onGenreChange,
} from '../../actions';
import Head from '../../components/Head';

const mapStateToProps = state => ({
  genres: state.getIn(['data', 'genres']),
});

const mapDispatchToProps = dispatch => ({
  onGenreChange: genre => dispatch(onGenreChange(genre)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);
