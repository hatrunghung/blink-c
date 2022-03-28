import React, { HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FlexContext } from '../contexts/FlexContext';
import { StyledFlex } from './styles/StyledFlex';
import { ArraySpace, FLEX_NUMBER, SPACE } from './types';

export interface IFlexProps extends HTMLAttributes<HTMLDivElement> {
  gutters?: SPACE;
  columns?: FLEX_NUMBER;
  debug?: boolean;
}

const Flex = forwardRef<HTMLDivElement, IFlexProps>((props, ref) => {
  const value = React.useMemo(
    () => ({
      columns: props.columns,
      gutters: props.gutters,
      debug: props.debug,
    }),
    [props.columns, props.gutters, props.debug],
  );

  return (
    <FlexContext.Provider value={value}>
      <StyledFlex debug={props.debug} ref={ref} {...props} />
    </FlexContext.Provider>
  );
});

Flex.displayName = 'Flex';

Flex.propTypes = {
  debug: PropTypes.bool,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutters: PropTypes.oneOf(ArraySpace),
};

Flex.defaultProps = {
  columns: 24,
};

export default Flex;
