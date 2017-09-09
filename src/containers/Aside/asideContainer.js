import { connect } from 'react-redux';

import {
  onMutchRestart,
} from '../../actions';
import Aside from '../../components/Aside';

const mapStateToProps = state => ({
  correct: state
            .getIn(['data', 'questions'])
            .filter(val => val.get('result'))
            .size,
  wrong: state
            .getIn(['data', 'questions'])
            .filter(val => val.get('result') !== undefined && !val.get('result'))
            .size,
});

const mapDispatchToProps = dispatch => ({
  onRestart: () => dispatch(onMutchRestart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Aside);
