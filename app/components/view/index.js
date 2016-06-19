import { Component } from 'react';
import GlobalHeader from 'app-core/globalHeader';
import GlobalFooter from 'app-core/globalFooter';
import styles from './styles';

class View extends Component {
  render() {
    return (
      <div className="view">
        {!this.props.header ? null : (
          <GlobalHeader
            {...this.props.header}
          />
        )}
        <main role="main">
          {this.props.children}
        </main>
        {!this.props.footer ?  null : (
          <GlobalFooter
            {...this.props.footer}
          />
        )}
      </div>
    );
  }
};

View.propTypes = {

};

View.defaultProps = {
  header: true,
  footer: true
};

export default View;
