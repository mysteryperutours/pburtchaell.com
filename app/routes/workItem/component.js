// @flow
import React, { PureComponent, Children } from 'react';
import Module from './components/module';
import WorkItemHeader from './components/header';
import RouteContainer from '../../components/routeContainer';
import Row from '../../components/row';
import HireMe from '../../components/hire';
import requestHandler from '../../support/requestHandler';
import './styles.css';

const INITIAL_STATE = {
  data: {},
  meta: {},
  isPending: true,
  isRejected: false
};

type Props = {
  route: {
    config?: Object
  },
  params: {
    title: string
  }
};

class WorkItemRoute extends PureComponent {
  constructor(props: Props) {
    super(props: Props);

    this.state = INITIAL_STATE;
  }

  componentWillMount() {
    const { title } = this.props.match.params;
    requestHandler.call(this, `${DATABASE_URL}/projects/${title}.json`);
  }

  render(): RouteContainer {
    const { data, meta, isPending } = this.state;

    return (
      <RouteContainer
        {...this.props.config}
        isPending={isPending}
        color={meta.color}
        textColor={meta.textColor}
      >
        <article
          role="article"
          className="case-study"
        >
          {/**
            * PART 1:
            * The work item header contains the title, subtitle and cover image
            * for the route. The header is also optionally rendered with a grad
            */}
          <WorkItemHeader
            title={meta.title}
            description={meta.description}
            isPending={isPending}
          />

          <div className="case-study-content">
            {/**
             * PART 2a:
             * Show "marks" when the route is pending.
             */}
            {isPending ? (
              <Row>
                <div className="pending-marks">
                  <div className="pending-mark" />
                  <div className="pending-mark" />
                </div>
              </Row>
            ) : null}

            {/**
              * PART 2:
              * The work item modules are only rendered if the route is
              * fulfilled. The React Children API is used to create keys
              * for each module.
              */}
            {isPending ? null : Children.toArray(data.modules.map(module => (
              <Module
                key={module.key}
                type={module.type}
                propsFromJSON={module.props}
              >
                {module.children}
              </Module>
            )))}

            {isPending ? null : (
              <Row size="large">
                <HireMe />
              </Row>
            )}
          </div>
        </article>
      </RouteContainer>
    );
  }
}

export default WorkItemRoute;
