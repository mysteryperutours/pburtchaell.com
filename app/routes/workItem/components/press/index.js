import React, { Element } from 'react';
import Row from '../../../../components/row';
import Column from '../../../../components/column';

type Props = {
  items: Array<*>
};

const Press = ({ items }: Props): Element<*> => items ? (
  <section
    style={{
      marginTop: '7rem'
    }}
  >
    <Row defaultColumn={false}>
      <Column
        largeSize={3}
        smallSize={4}
      >
        <h5
          style={{
            textAlign: 'right',
            margin: '1rem'
          }}
        >Press</h5>
      </Column>
      <Column
        largeSize={7}
        smallSize={8}
      >
        <div className="case-study-meta case-study-meta--press">
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
        </div>
      </Column>
    </Row>
  </section>
) : null;

export default Press;
