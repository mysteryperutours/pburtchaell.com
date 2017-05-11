import React, { Component } from 'react';
import Row from '../../components/row';
import Text, { types as textTypes } from '../../components/text';
import RouteContainer from '../../components/routeContainer';
import renderListView from '../../components/listView/renderListView';
import renderPendingListView from '../../components/ListView/renderPendingListView';
import requestHandler from '../../support/requestHandler';
import './styles.css';

const INITIAL_STATE = {
  data: [],
  isPending: true,
  isRejected: false
};

class WorkRoute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = INITIAL_STATE;
  }

  componentWillMount() {
    requestHandler.call(this, `${DATABASE_URL}/projects.json`);
  }

  render(): RouteContainer {
    const { isPending, data } = this.state;

    return (
      <RouteContainer>
        <Row size="large">
          <Text type={textTypes.HEADER_1}>Work</Text>
        </Row>
        <Row size="large" defaultColumn={false}>
          {isPending ? renderPendingListView() : renderListView(data)}
        </Row>
      </RouteContainer>
    );
  }
}

export default WorkRoute;
