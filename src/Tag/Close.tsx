import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledClose } from './StyledClose';
import { Declined } from 'blinkicon';

const Close = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <StyledClose ref={ref} {...props}>
        <Declined />
      </StyledClose>
    );
  },
);

Close.displayName = 'Close';

export default Close;
