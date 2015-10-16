import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { article } from '../../actions';

function mapStateToProps(state) {
  return {
    article: state.article,
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => null
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(require('./view'));
