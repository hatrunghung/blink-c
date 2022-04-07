import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingSM } from './styles/StyledHeading';

export const HeadingSM = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h5', color, ...props }, ref) => {
    return <StyledHeadingSM heading={as} color={color} ref={ref} {...props} />;
  },
);

HeadingSM.displayName = 'HeadingSM';

HeadingSM.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingSM;
