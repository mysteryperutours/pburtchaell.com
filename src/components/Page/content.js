import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Text, { types as textTypes } from '../../components/Text';

/*
 * Function: PageContent
 * Description:
 */
const PageContent = ({ children, flexOrder }) => {
  return (
    <Column largeSize={6} smallSize={12} flexOrder={flexOrder}>
      <div
        className="project--column-1"
        dangerouslySetInnerHTML={{ __html: children }}
      />
      <form
        action="https://tinyletter.com/pburtchaell"
        method="post"
        target="popupwindow"
        className="newsletter-form"
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
    </Column>
  );
};

PageContent.propTypes = {
  flexOrder: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};


export default PageContent;
