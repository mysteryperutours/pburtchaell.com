import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import FixedPosition from '../FixedPosition';

function SidebarContainer(props) {
  const {
    children, largeSize, smallSize, flexOrder, hideOnSmall, hideOnLarge,
    className,
  } = props;

  return (
    <Column
      elementType="aside"
      largeSize={largeSize}
      smallSize={smallSize}
      flexOrder={flexOrder}
      hideOnSmall={hideOnSmall}
      hideOnLarge={hideOnLarge}
    >
      <FixedPosition
        className={className}
        disableOnSmall={hideOnSmall}
      >
        {children}
      </FixedPosition>
    </Column>
  );
}

SidebarContainer.defaultProps = {
  largeSize: 3,
  smallSize: 12,
  hideOnSmall: true,
  hideOnLarge: false,
  className: null,
};

SidebarContainer.propTypes = {
  largeSize: PropTypes.number,
  smallSize: PropTypes.number,
  hideOnSmall: PropTypes.bool,
  hideOnLarge: PropTypes.bool,
  className: PropTypes.string,
  flexOrder: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.component).isRequired,
};

export default SidebarContainer;
