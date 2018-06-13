import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Text from '../../components/Text';

/*
 * Function: PageNewsletter
 * Description:
 */
class PageNewsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  render() {
    return !this.state.submitted ? (
      <form
        action="https://tinyletter.com/pburtchaell"
        method="post"
        target="popupwindow"
        className="site-main-content__newsletter-form"
        onSubmit={(event) => {
          event.preventDefault();
          window.open('https://tinyletter.com/pburtchaell', 'popupwindow', 'scrollbars=yes,width=800,height=600');
          this.setState({ submitted: true });
        }}
      >
        <Text>Receive infrequent updates on projects, interests and fun stuff</Text>
        <input required type="email" name="email" id="tlemail" placeholder="email@domain.com" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <small>Powered by TinyLetter</small>
      </form>
    ) : (
      <form className="site-main-content__newsletter-form site-main-content__newsletter-form-submitted">
        <Text>Wow, I am honored. Thank you for subscribing.</Text>
      </form>
    );
  }
}

/*
 * Function: PageContent
 * Description:
 */
const PageContent = ({ children, className, newsletter, flexOrderSmall, flexOrderLarge }) => {
  const child = () => {
    return typeof children === 'string' ? (
      <div dangerouslySetInnerHTML={{ __html: children }} />
    ) : children;
  };

  return (
    <Column
      className={className}
      largeSize={6}
      smallSize={12}
      flexOrderSmall={flexOrderSmall}
      flexOrderLarge={flexOrderLarge}
    >
      {child()}
      {newsletter && (<PageNewsletter />)}
    </Column>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
  flexOrderSmall: PropTypes.number,
  flexOrderLarge: PropTypes.number,
  newsletter: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

PageContent.defaultProps = {
  className: null,
  flexOrderSmall: null,
  flexOrderLarge: null,
  newsletter: false,
};


export default PageContent;
