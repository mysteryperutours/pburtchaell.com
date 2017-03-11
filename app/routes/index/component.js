// @flow
import React, { Component, Element, createElement } from 'react';
import RouteContainer from '../../components/routeContainer';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import Column from '../../components/column';
import ListView from '../../components/listView';
import requestHandler from '../../support/requestHandler';

type Props = {
  children: Element<*>
}

class IndexRoute extends Component {
  constructor(props: Props, context: Object) {
    super(props, context);

    this.state = {
      isPending: true
    };
  }

  state: {
    isPending: boolean
  };

  componentWillMount() {
    requestHandler.call(this, `${DATABASE_URL}/projects.json`);
  }

  props: Props;

  render(): RouteContainer {
    const { isPending, data } = this.state;

    return (
      <RouteContainer>
        <Row>
          <Column largeSize={8} smallSize={12}>
            <Text
              type={types.HEADER_1}
            >Patrick Burtchaell</Text>
            <Text
              type={types.HEADER_4}
              style={{
                marginTop: '-1rem',
                marginBottom: '9rem'
              }}
            >Product Designer</Text>
          </Column>
        </Row>
        <Row>
          <Text
            type={types.HEADER_4}
          >Selected Works</Text>
        </Row>
        <ListView
          isPending={isPending}
          items={isPending ? null : Object.keys(data).map((key) => {
            const { meta } = data[key];
            const { date } = meta;
            const defaultStyles = {
              height: '25rem',
              borderRadius: '1px',
              backgroundSize: 'cover'
            };

            return ({
              id: meta.id,
              title: meta.title,
              linkTo: `/work/${date.year}/${date.month}/${meta.pathname}`,
              style: {
                ...defaultStyles,
                backgroundImage: `url(${meta.previewImage.url})`,
                backgroundColor: meta.color
              }
            });
          })}
        />
      </RouteContainer>
    );
  }
}

IndexRoute.propTypes = {};

export default IndexRoute;
