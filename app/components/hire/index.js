import React, { Element } from 'react';
import Text, { types as iconTypes } from '../text';
import Icon, { types as textTypes } from '../icon';
import './styles.css';

const WorkItemHire = (props: Props): Element<*> => {
  return (
    <div className="availability-container">
      <div className="availability">
        <div className="availability-string">
          <Text type={textTypes.BODY}>
            Available starting September 2017
          </Text>
        </div>
        <div className="availability-buttons">
          <a
            href="mailto:patrick@pburtchaell.com"
            target="_blank"
            className="button button-inline"
            title="Patrick Burtchaell on email"
          >
            Email
          </a>
          <a
            href="https://m.me/pburtchaell"
            target="_blank"
            className="button button-inline"
            title="Patrick Burtchaell on Facebook Messenger"
          >
            <Icon
              type={iconTypes.MESSENGER}
              fill="#0063B5"
            />
            Messenger
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItemHire;
