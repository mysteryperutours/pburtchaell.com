import React, { Element } from 'react';
import Text, { types } from '../../../../components/text';
import Row from '../../../../components/row';

type Props = {
  items: Array<*>
};

const WorkItemPress = ({ items }: Props): Element<*> => {
  return items ? (
    <Row
      size="small"
      elementType="section"
      className="case-study-module case-study-meta case-study-meta--press"
    >
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className="case-study-link">
              <a
                href={item.url}
                title={item.title}
              >
                {`"${item.title}"`}
              </a>
            </div>
            <div>{item.publisher}</div>
          </li>
        ))}
      </ul>
    </Row>
  ) : null;
};

export default WorkItemPress;
