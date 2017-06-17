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
    requestHandler.call(this, title);
  }

  render(): RouteContainer {
    const { data, isPending } = this.state;

    return (
      <RouteContainer
        isPending={isPending}
        title={isPending ? null : data[0].title}
        {...this.props.config}
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
            title={isPending ? null : data[0].title}
            question={isPending ? null : data[0].question}
            link={isPending ? null : data[0].link}
            linkTitle={isPending ? null : data[0].linkTitle}
            body={isPending ? null : data[0].body}
          />

        {isPending ? null : (
          <div className="case-study-content">
            {/**
              * PART 2:
              * The work item modules are only rendered if the route is
              * fulfilled. The React Children API is used to create keys
              * for each module.
              */}
            {Array.isArray(data[0].images) ? data[0].images.map(image => (
              <Module
                type="module-image"
                key={image.title}
                {...image}
              />
            )) : null}

            {Array.isArray(data[0].images) ? (
              <Row size="large">
                <HireMe />
              </Row>
            ) : (<div className="padding padding-large"/>)}
          </div>
        )}
        </article>
      </RouteContainer>
    );
  }
}

export default WorkItemRoute;
