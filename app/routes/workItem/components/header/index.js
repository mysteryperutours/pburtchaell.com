import React, { Element } from 'react';
import classNames from 'classnames';
import Text, { types } from '../../../../components/text';
import Row from '../../../../components/row';
import Column from '../../../../components/column';
import googleAnalyticsEvents from '../../../../support/googleAnalyticsEvents';
import googleAnalyticsCategories from '../../../../support/googleAnalyticsCategories';

type Props = {
  isPending: boolean,
  title: string,
  description: string
};

const WorkItemHeader = (props: Props): Element<*> => {
  const { isPending } = props;

  const className = classNames('case-study-header', {
    'is-pending': isPending
  });

  return (
    <header className={className}>
      <Row size="full">
        <Column largeSize="12" smallSize="12">
          <div className="case-study-titles">
            <Text type={types.HEADER_2}>
              {props.title}
            </Text>
          </div>
        </Column>
        <Column largeSize="6" smallSize="12">
          <Text type={types.BODY}>
            {props.question}
          </Text>
          {props.link ? (
            <small className="small--block">
              <a
                href={props.link}
                target="_blank"
                className="a--arrow-left"
                onClick={() => ga(
                  'send',
                  'event',
                  googleAnalyticsCategories.BUTTONS,
                  googleAnalyticsEvents.OUTBOUND_PROJECT_LINK_FROM_POST,
                  props.title
                )}
              >
                {props.linkTitle}
              </a>
            </small>
          ) : null}
        </Column>
        <Column largeSize="8" smallSize="12">
          <div className="padding padding-small"/>
          <div
            dangerouslySetInnerHTML={{
              __html: props.body
            }}
          />
        </Column>
      </Row>
    </header>
  );
};

export default WorkItemHeader;
