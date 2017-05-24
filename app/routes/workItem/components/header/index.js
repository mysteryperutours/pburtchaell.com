import React, { Element } from 'react';
import classNames from 'classnames';
import Text, { types } from '../../../../components/text';
import Row from '../../../../components/row';

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
      {isPending ? null : (
        <Row size="full">
          <div className="case-study-titles">
            <Text type={types.HEADER_1}>
              {props.title}
            </Text>
            <Text type={types.HEADER_2}>
              {props.description}
            </Text>
          </div>
        </Row>
      )}
    </header>
  );
};

export default WorkItemHeader;
