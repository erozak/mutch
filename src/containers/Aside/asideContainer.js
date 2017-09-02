import { connect } from 'react-redux';

import {
  onMutchRestart,
} from '../../actions';
import Aside from '../../components/Aside';

const mapStateToProps = state => ({
  correct: state.getIn(['data', 'score', 'correct']),
  wrong: state.getIn(['data', 'score', 'wrong']),
});

const mapDispatchToProps = dispatch => ({
  onRestart: () => dispatch(onMutchRestart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Aside);
