import { connect } from 'react-redux';

import content from '../../components/Content';

const mapStateToProps = state => ({
  genre: state.getIn(['data', 'pickedGenre']),
  amount: state.getIn(['ui', 'amount']),
  questions: state.getIn(['data', 'questions']),
});

export default connect(
  mapStateToProps,
)(content);
