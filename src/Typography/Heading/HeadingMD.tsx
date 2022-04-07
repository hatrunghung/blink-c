import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingMD } from './styles/StyledHeading';

export const HeadingMD = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h4', color, ...props }, ref) => {
    return <StyledHeadingMD heading={as} color={color} ref={ref} {...props} />;
  },
);

HeadingMD.displayName = 'HeadingMD';

HeadingMD.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingMD;
