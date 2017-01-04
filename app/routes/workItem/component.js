import React, { PureComponent, Children } from 'react';
import Module from './components/module';
import Text, { types } from '../../components/text';
import Column from '../../components/column';
import Row from '../../components/row';
import RouteContainer from '../../components/routeContainer';
import requestHandler from '../../support/requestHandler';
import styles from './styles.css';

const INITIAL_STATE = {
  data: [],
  isPending: true,
  isRejected: false
};

class WorkItemRoute extends PureComponent {
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
        <article role="article" className={styles.caseStudy}>
          {isPending ? null : (
            <header className={styles.caseStudyHeader}>
              <Row
                style={{
                  maxWidth: '100%'
                }}
              >
                <div
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
                    type={types.HEADER_1}
                  >{data.meta.title}</Text>
                  <Text
                    type={types.HEADER_2}
                  >{data.meta.company}</Text>
                </Column>
              </Row>
            </header>
          )}
          {isPending ? null : Children.toArray(data.data.modules.map(module => (
            <Module
              key={module.key}
              type={module.type}
            >
              {module.children}
            </Module>
          )))}
        </article>
      </RouteContainer>
    );
  }
}

export default WorkItemRoute;
