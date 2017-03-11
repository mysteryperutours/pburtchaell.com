import React, { Component } from 'react';
import ListView from '../../components/listView';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import Column from '../../components/column';
import RouteContainer from '../../components/routeContainer';
import requestHandler from '../../support/requestHandler';
import './styles.less';

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
    const { isPending, isRejected, data } = this.state;

    return (
      <RouteContainer>
        {isRejected ? (
          <Row>
            <Text type={types.HEADER_1}>Oh no!</Text>
          </Row>
        ) : (
          <Row>
            <Text type={types.HEADER_1}>All Work</Text>
          </Row>
        )}
        {isRejected ? (
          <Row>
            <hr />
            A server error has occured.
          </Row>
        ) : (
          <ListView
            isPending={isPending}
            items={isPending ? null : Object.keys(data).map((key) => {
              const { meta } = data[key];
              const { date } = meta;

              return meta.status === 'pending' ? ({
                id: meta.id,
                title: meta.title,
                isNull: true,
                style: {
                  backgroundColor: '#e8e6e6'
                }
              }) : ({
                id: meta.id,
                title: meta.title,
                linkTo: `/work/${date.year}/${date.month}/${meta.pathname}`,
                style: {
                  backgroundImage: `url(${meta.previewImage.url})`,
                  backgroundColor: `rgb(${meta.primaryColor.rgb})`
                }
              });
            })}
          />
        )}
      </RouteContainer>
    );
  }
}

export default WorkRoute;
