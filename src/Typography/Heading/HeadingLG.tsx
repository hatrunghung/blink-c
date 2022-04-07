import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IHeadingProps } from './types';
import { StyledHeadingLG } from './styles/StyledHeading';

export const HeadingLG = forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h3', color, ...props }, ref) => {
    return <StyledHeadingLG heading={as} color={color} ref={ref} {...props} />;
  },
);

HeadingLG.displayName = 'HeadingLG';

HeadingLG.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
};

export default HeadingLG;
