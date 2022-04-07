import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingXXL } from './styles/StyledHeading';

export const HeadingXXL = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h2', color, ...props }, ref) => {
    return <StyledHeadingXXL heading={as} color={color} ref={ref} {...props} />;
  },
);

HeadingXXL.displayName = 'HeadingXXL';

HeadingXXL.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingXXL;
