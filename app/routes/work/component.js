import React, { Component } from 'react';
import ListView from '../../components/listView';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import RouteContainer from '../../components/routeContainer';
import requestHandler from '../../support/requestHandler';

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
        <Row>
          <Text
            type={types.HEADER_1}
            style={{
              marginTop: '1rem',
              marginBottom: '4rem'
            }}
          >All Work</Text>
        </Row>
        {isPending ? null : (
          <ListView
            itemStyle={{
              height: '30rem',
              borderRadius: '1px',
              backgroundSize: 'cover'
            }}
            items={Object.keys(data).map((key) => {
              const { meta } = data[key];
              const { date } = meta;

              return ({
                id: meta.id,
                title: meta.title,
                linkTo: `/work/${date.year}/${date.month}/${meta.pathname}`,
                style: {
                  backgroundImage: `url(${meta.coverImage.url})`
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
