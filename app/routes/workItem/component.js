// @flow
import React, { PureComponent, Children } from 'react';
import Module from './components/module';
import Press from './components/press';
import Text, { types } from '../../components/text';
import Column from '../../components/column';
import Row from '../../components/row';
import RouteContainer from '../../components/routeContainer';
import requestHandler from '../../support/requestHandler';
import styles from './styles.less';

const INITIAL_STATE = {
  data: [],
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
  constructor(props: Props, context) {
    super(props: Props, context);

    this.state = INITIAL_STATE;
  }

  componentWillMount() {
    const { title } = this.props.params;
    requestHandler.call(this, `${DATABASE_URL}/projects/${title}.json`);
  }

  render(): RouteContainer {
    const { isPending, data } = this.state;
    let color;
    let gradient;
    let textColor;

    if (!isPending) {
      color = data.meta.color;
      gradient = data.meta.gradient || color;
      textColor = data.meta.textColor;
    }

    return (
      <RouteContainer
        {...this.props.route.config}
        isPending={isPending}
        defaultStyles={false}
        color={isPending ? '#efefef' : color}
        textColor={isPending ? null : textColor}
      >
        <article
          role="article"
          className={styles.caseStudy}
        >
          <header
            className="case-study-header"
            style={{
              background: isPending ? '#efefef' : gradient
            }}
          >
            <Row
              style={{
                maxWidth: '100%'
              }}
            >
              <Column largeSize={12}>
                <Text
                  type={types.HEADER_1}
                  style={{
                    color: textColor
                  }}
                >{isPending ? (
                  <div
                    style={{
                      height: '12rem'
                    }}
                  />
                ) : data.meta.title}</Text>
                <Text
                  type={types.HEADER_2}
                  style={{
                    color: textColor
                  }}
                >{isPending ? (
                  <div
                    style={{
                      height: '11rem'
                    }}
                  />
                ) : data.meta.description}</Text>
              </Column>
            </Row>
            <Row
              style={{
                maxWidth: '100%'
              }}
            >
              <div
                className="case-study-cover-image"
                style={Object.assign({
                  height: '60rem',
                  width: '100%',
                }, isPending ? {} : {
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundImage: `url(${data.meta.coverImage.url})`,
                })}
              />
            </Row>
          </header>
          {isPending ? null : (
            <div className="case-study-content">
              <section>
                <Row defaultColumn={false}>
                  <Column largeSize={3} smallSize={4}>
                    <div className="case-study-meta">
                      <ul>
                        {data.meta.company ? (
                          <li>
                            <div>{data.meta.company}</div>
                            <div>Company</div>
                          </li>
                        ) : null}
                        <li>
                          <div>{data.meta.role}</div>
                          <div>Role</div>
                        </li>
                        {data.meta.website ? (
                          <li>
                            <div className="case-study-link">
                              <a href={data.meta.website.href}>
                                <span>{data.meta.website.title}</span>
                              </a>
                            </div>
                            <div>website</div>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </Column>
                  <Column largeSize={7} smallSize={8}>
                    <p className="case-study-intro">{data.meta.intro}</p>
                  </Column>
                </Row>
              </section>
              {data.data ? Children.toArray(data.data.modules.map(m => (
                <Module
                  key={m.key}
                  type={m.type}
                >
                  {m.children}
                </Module>
              ))) : null}
              {data.data ? (
                <Press
                  items={data.data.press}
                />
              ) : null}
            </div>
          )}
        </article>
      </RouteContainer>
    );
  }
}

export default WorkItemRoute;
