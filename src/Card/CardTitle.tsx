import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledCardTitle } from './StyledCardTitle';

const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <StyledCardTitle ref={ref} {...props}>
        {props.children}
      </StyledCardTitle>
    );
  },
);

CardTitle.displayName = 'CardTitle';

export default CardTitle;
