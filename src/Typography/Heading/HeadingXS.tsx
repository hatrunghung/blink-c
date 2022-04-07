import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingXS } from './styles/StyledHeading';

export const HeadingXS = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h1', color, ...props }, ref) => {
    return <StyledHeadingXS heading={as} color={color} ref={ref} {...props} />;
  },
);

HeadingXS.displayName = 'HeadingXS';

HeadingXS.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingXS;
