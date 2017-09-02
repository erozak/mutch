import { connect } from 'react-redux';

import Content from '../../components/Content';

const mapStateToProps = state => ({
  genre: state.getIn(['data', 'pickedGenre']),
  amount: state.getIn(['data', 'amount']),
  questions: state.getIn(['data', 'questions']),
});

export default connect(
  mapStateToProps,
)(Content);
