import React, { Component } from 'react';
import Module from './components/module';
import Text, { types } from '../../components/text';
import Column from '../../components/column';
import Row from '../../components/row';
import RouteContainer from '../../components/routeContainer';
import requestHandler from '../../support/requestHandler';

const INITIAL_STATE = {
  data: [],
  isPending: true,
  isRejected: false
};

class WorkItemRoute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = INITIAL_STATE;
  }

  componentWillMount() {
    requestHandler.call(this, `${DATABASE_URL}/projects/facebook.json`);
  }

  render(): RouteContainer {
    const { isPending, data } = this.state;

    return (
      <RouteContainer>
        {isPending ? null : (
          <header
            className="case-study-header"
            style={{ marginBottom: '3rem' }}
          >
            <Row
              style={{
                maxWidth: '100%'
              }}
            >
              <div
                key="1"
                style={{
                  height: '60rem',
                  width: '100%',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${data.meta.coverImage.url})`,
                  marginBottom: '2rem'
                }}
              />
            </Row>
            <Row>
              <Column size={11} offset={1}>
                <Text
                  key="2"
                  type={types.HEADER_1}
                >{data.meta.title}</Text>
                <Text
                  key="3"
                  type={types.HEADER_2}
                >{data.meta.company}</Text>
              </Column>
            </Row>
          </header>
        )}
        {isPending ? null : data.data.modules.map(module => (
          <Module
            key={module.key}
            type={module.type}
          >
            {module.children}
          </Module>
        ))}
      </RouteContainer>
    );
  }
}

export default WorkItemRoute;
