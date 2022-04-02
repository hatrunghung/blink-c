import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledKbd } from './styles/StyledKbd';

const Kbd = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <StyledKbd ref={ref} {...props}>
        {props.children}
      </StyledKbd>
    );
  },
);

Kbd.displayName = 'Kbd';

export default Kbd;
