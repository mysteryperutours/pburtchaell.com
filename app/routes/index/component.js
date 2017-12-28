// @flow
import React, { Component, Element } from 'react';
import RouteContainer from '../../components/routeContainer';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import Column from '../../components/column';
import renderListView from '../../components/listView/renderListView';
import renderPendingListView from '../../components/listView/renderPendingListView';
import requestHandler from '../../support/requestHandler';

type Props = {
  children: Element<*>
}

class IndexRoute extends Component {
  constructor(props: Props, context: Object) {
    super(props, context);

    this.state = {
      data: null,
      isPending: true
    };
  }

  state: {
    data: null;
    isPending: boolean
  };

  componentWillMount() {
    requestHandler.call(this, null);
  }

  props: Props;

  render(): RouteContainer {
    const { isPending, data } = this.state;

    return (
      <RouteContainer
        isPending={isPending}
      >
        <Row size="large">
          <Column largeSize={6} smallSize={12}>
            <Text type={types.HEADER_2}>
              Patrick Burtchaell
            </Text>
            <Text>
              Designer and web developer, working with teams to thoughtfully build impactful products.
            </Text>
          </Column>
        </Row>
        <Row size="large">
          <Column largeSize={5} smallSize={12}>
            <Text type={types.SMALL}>
              Available for consultancy and freelance work in New Orleans, San Francisco and elsewhere. If you would like to work together, <a href="mailto:patrick@pburtchaell.com">get in touch</a>.
            </Text>
            <Text type={types.SMALL}>
              <Text
                className="a--arrow-left"
                linkTo="/services"
              >
                Learn more about my services
              </Text>
            </Text>
          </Column>
        </Row>
        <div className="padding padding-large" />
        <Row size="large">
          <Text type={types.HEADER_2}>
            Selected Work
          </Text>
        </Row>
        <Row size="large" defaultColumn={false}>
          {isPending ? renderPendingListView() : renderListView(data)}
        </Row>
      </RouteContainer>
    );
  }
}

IndexRoute.propTypes = {};

export default IndexRoute;
