// @flow
import React, { Component, Element } from 'react';
import RouteContainer from '../../components/routeContainer';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import Column from '../../components/column';
import renderListView from '../../components/listView/renderListView';
import renderPendingListView from '../../components/ListView/renderPendingListView';
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
    requestHandler.call(this, `${DATABASE_URL}/projects.json?orderBy="id"`);
  }

  props: Props;

  render(): RouteContainer {
    const { isPending, data } = this.state;

    return (
      <RouteContainer
        isPending={isPending}
      >
        <Row size="large">
          <Column largeSize={8} smallSize={12}>
            <Text type={types.HEADER_1}>
              Patrick Burtchaell
            </Text>
            <Text type={types.HEADER_2}>
              Product Designer
            </Text>
          </Column>
        </Row>
        <div className="padding padding-large" />
        <Row size="large" defaultColumn={false}>
          {isPending ? renderPendingListView() : renderListView(data)}
        </Row>
      </RouteContainer>
    );
  }
}

IndexRoute.propTypes = {};

export default IndexRoute;
