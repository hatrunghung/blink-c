import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledCardAction } from './StyledCardAction';

const CardAction = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <StyledCardAction ref={ref} {...props}>
        {props.children}
      </StyledCardAction>
    );
  },
);

CardAction.displayName = 'CardAction';

export default CardAction;
