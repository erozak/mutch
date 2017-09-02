import { connect } from 'react-redux';

import Frame from '../../components/Frame';

const mapStateToProps = state => ({
  pickedQuestion: state.getIn(['ui', 'pickedQuestion']),
});

export default connect(
  mapStateToProps,
)(Frame);
