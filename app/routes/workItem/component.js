// @flow
import React, { PureComponent, Children } from 'react';
import Module from './components/module';
import WorkItemHeader from './components/header';
import WorkItemPress from './components/press';
import WorkItemHire from './components/hire';
import RouteContainer from '../../components/routeContainer';
import ListView from '../../components/listView';
import Row from '../../components/row';
import Text, { types } from '../../components/text';
import requestHandler from '../../support/requestHandler';
import './styles.less';

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
            textColor={meta.textColor}
            backgroundColor={meta.backgroundColor}
            coverImage={meta.coverImage}
            isPending={isPending}
          />

          <div className="case-study-content">
            {/**
             * PART 2a:
             * Show "marks" when the route is pending.
             */}
            {isPending ? (
              <Row size="small">
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

            {/**
              * PART 3:
              * The work item press module is rendered if the route
              * is fulfilled and if the array of press items exists.
              */}
            {isPending || !data.press ? null : (
              <WorkItemPress
                items={data.press}
              />
            )}

            {isPending ? null : (
              <WorkItemHire />
            )}

            {/*isPending ? null : (
              <section
                style={{
                  backgroundColor: '#E6E6E6',
                  paddingBottom: '7rem'
                }}
              >
                <Text
                  type={types.BODY}
                  style={{
                    textAlign: 'center',
                    opacity: .8,
                    marginTop: 0
                  }}
                >
                  More work
                </Text>
                <ListView
                  isPending={isPending}
                  items={isPending ? null : data.related.map((related) => {
                    const { date } = related;

                    return meta.status === 'pending' ? ({
                      id: meta.id,
                      title: meta.title,
                      isNull: true
                    }) : ({
                      id: related.id,
                      title: related.title,
                      linkTo: `/work/${date.year}/${date.month}/${related.pathname}`,
                      style: {
                        backgroundImage: `url(${related.previewImage.url})`,
                        backgroundColor: `rgb(${related.primaryColor.rgb})`
                      }
                    });
                  })}
                />
              </section>
            )*/}
          </div>
        </article>
      </RouteContainer>
    );
  }
}

export default WorkItemRoute;
