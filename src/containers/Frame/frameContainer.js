import { connect } from 'react-redux';

import Frame from '../../components/Frame';

const mapStateToProps = state => ({
  popup: state.getIn(['ui', 'popup', 'show']),
});

export default connect(
  mapStateToProps,
)(Frame);
