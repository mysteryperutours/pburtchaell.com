import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { article } from 'actions';

function mapStateToProps(state) {
  return {
    article: state.article
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (data) => {
      return dispatch(article.create(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(require('./view'));
