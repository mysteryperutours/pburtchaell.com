import React, { Element } from 'react';
import Text, { types as iconTypes } from '../../../../components/text';
import Icon, { types as textTypes } from '../../../../components/icon';
import Row from '../../../../components/row';

type Props = {

};

const WorkItemHire = (props: Props): Element<*> => {
  const styles = {
    text: {
      textAlign: 'center',
      opacity: .8
    }
  };

  return (
    <Row
      elementType="section"
      size="full"
      className="case-study-module case-study-module-hire"
      style={{
        backgroundColor: '#E6E6E6',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        flex: '1 auto'
      }}
    >
      <Text
        type={textTypes.HEADER_2}
        style={styles.text}
      >
        {"Let's work together!"}
      </Text>
      <ul className="social-links-list">
        <li
          className="about-links-list-item"
          style={styles.text}
        >
          <span>Get in touch </span>
          <a
            href="mailto:patrick@pburtchaell.com"
            className="is-gray"
            title="Patrick Burtchaell on email"
          >
            via email
          </a>
        </li>
        <li
          className="about-links-list-item"
          style={styles.text}
        >
          <span
            style={{
              marginRight: '1.25rem'
            }}
          >or</span>
          <Icon
            type={iconTypes.MESSENGER}
            fill="#0063B5"
          />
          <a
            href="https://m.me/pburtchaell"
            className="is-gray"
            title="Patrick Burtchaell on Facebook Messenger"
          >
            Messenger
          </a>
          <span>.</span>
        </li>
      </ul>
    </Row>
  );
};

export default WorkItemHire;
