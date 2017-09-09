import { connect } from 'react-redux';

import Main from '../../components/Main';

const mapStateToProps = state => ({
  pickedGenre: state.getIn(['data', 'pickedGenre']),
});

export default connect(
  mapStateToProps,
)(Main);
