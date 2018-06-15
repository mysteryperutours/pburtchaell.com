import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Text from '../../components/Text';

/*
 * Function: PageNewsletter
 * Description: Renders a newsletter subscription component
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
 * Function: getElementFromChildrenProps
 * Description: Returns an element based off the
 * children provided in the props.
 */
const getElementFromChildrenProps = (childrenFromProps) => {
  const element = typeof childrenFromProps === 'string' ? (
    <div dangerouslySetInnerHTML={{ __html: childrenFromProps }} />
  ) : childrenFromProps;

  return element;
};

/*
 * Function: PageContent
 * Description:
 */
const PageContent = (props) => {
  const {
    children,
    className,
    newsletter,
    flexOrderSmall,
    flexOrderLarge,
  } = props;

  return (
    <Column
      className={className}
      largeSize={6}
      smallSize={12}
      flexOrderSmall={flexOrderSmall}
      flexOrderLarge={flexOrderLarge}
    >
      {getElementFromChildrenProps(children)}
      {newsletter && (<PageNewsletter />)}
    </Column>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
  flexOrderSmall: PropTypes.number,
  flexOrderLarge: PropTypes.number,
  newsletter: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

PageContent.defaultProps = {
  className: null,
  flexOrderSmall: null,
  flexOrderLarge: null,
  newsletter: false,
};


export default PageContent;
