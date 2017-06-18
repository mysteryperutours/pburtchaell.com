import React, { Element } from 'react';
import Text, { types as iconTypes } from '../text';
import Icon, { types as textTypes } from '../icon';
import googleAnalyticsEvents from '../../support/googleAnalyticsEvents';
import googleAnalyticsCategories from '../../support/googleAnalyticsCategories';
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
            className="button button-inline"
            title="Patrick Burtchaell on email"
            onMouseOver={() => ga(
              'send',
              'event',
              googleAnalyticsCategories.BUTTONS,
              googleAnalyticsEvents.HIRE_MODULE_BUTTON_HOVER,
              'Email'
            )}
            onClick={() => ga(
              'send',
              'event',
              googleAnalyticsCategories.BUTTONS,
              googleAnalyticsEvents.HIRE_MODULE_BUTTON,
              'Email'
            )}
          >
            Email
          </a>
          <a
            href="https://m.me/pburtchaell"
            target="_blank"
            className="button button-inline"
            title="Patrick Burtchaell on Facebook Messenger"
            onMouseOver={() => ga(
              'send',
              'event',
              googleAnalyticsCategories.BUTTONS,
              googleAnalyticsEvents.HIRE_MODULE_BUTTON_HOVER,
              'Messenger'
            )}
            onClick={() => ga(
              'send',
              'event',
              googleAnalyticsCategories.BUTTONS,
              googleAnalyticsEvents.HIRE_MODULE_BUTTON,
              'Messenger'
            )}
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
