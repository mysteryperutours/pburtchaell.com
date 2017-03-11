import React, { Element } from 'react';
import classNames from 'classnames';
import Text, { types } from '../../../../components/text';
import Row from '../../../../components/row';

type Props = {
  isPending: boolean,
  title: string,
  description: string,
  backgroundColor: string,
  coverImage: {
    url: string
  },
  textColor: string
};

const WorkItemHeader = (props: Props): Element<*> => {
  const { isPending } = props;

  const styles = {
    background: Object.assign({
      // pending styles
    }, isPending ? {} : {
      background: props.backgroundColor,
      backgroundAttachment: 'fixed'
    }),
    text: {
      color: props.textColor
    },
    coverImage: Object.assign({
      height: '42rem',
      width: '100%',
    }, isPending ? {} : {
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      backgroundImage: `url(${props.coverImage.url})`,
    })
  };

  return (
    <header
      className={classNames('case-study-header', {
        'is-pending': isPending
      })}
      style={styles.background}
    >
      {isPending ? null : (
        <Row size="full">
          <div className="case-study-titles">
            <Text
              type={types.HEADER_1}
              style={styles.text}
            >
              {props.title}
            </Text>
            <Text
              type={types.HEADER_2}
              style={styles.text}
            >
              {props.description}
            </Text>
          </div>
        </Row>
      )}
      <Row size="full">
        <div
          className="case-study-cover-image"
          style={styles.coverImage}
        />
      </Row>
    </header>
  );
};

export default WorkItemHeader;
