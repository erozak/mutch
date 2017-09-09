import { connect } from 'react-redux';

import {
  onGenrePicked,
} from '../../actions';
import Head from '../../components/Head';

const mapStateToProps = state => ({
  genres: state.getIn(['data', 'genres']),
});

const mapDispatchToProps = dispatch => ({
  onGenrePicked: genre => (
    () => dispatch(onGenrePicked(genre))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);
