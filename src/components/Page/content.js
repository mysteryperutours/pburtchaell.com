import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Text from '../../components/Text';

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
      {newsletter && (
        <form
          action="https://tinyletter.com/pburtchaell"
          method="post"
          target="popupwindow"
          className="site-main-content__newsletter-form"
          onSubmit={() => {
            window.open('https://tinyletter.com/pburtchaell', 'popupwindow', 'scrollbars=yes,width=800,height=600');
            return true;
          }}
        >
          <Text>Subscribe to infrequent updates on projects, interests and fun stuff</Text>
          <input required type="email" name="email" id="tlemail" placeholder="email@domain.com" />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
          <small>Powered by TinyLetter</small>
        </form>
      )}
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
