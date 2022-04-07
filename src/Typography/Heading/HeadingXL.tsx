import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingXL } from './styles/StyledHeading';

export const HeadingXL = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h2', color, ...props }, ref) => {
    return <StyledHeadingXL heading={as} color={color} ref={ref} {...props} />;
  },
);

HeadingXL.displayName = 'HeadingXL';

HeadingXL.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingXL;
