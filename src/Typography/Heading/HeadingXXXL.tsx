import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingXXXL } from './styles/StyledHeading';

export const HeadingXXXL = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h1', color, ...props }, ref) => {
    return (
      <StyledHeadingXXXL heading={as} color={color} ref={ref} {...props} />
    );
  },
);

HeadingXXXL.displayName = 'HeadingXXXL';

HeadingXXXL.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingXXXL;
