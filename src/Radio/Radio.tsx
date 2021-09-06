import React, { forwardRef, InputHTMLAttributes } from 'react';
import { StyledHiddenRadio } from './StyledHiddenRadio';
import { StyledRadioContainer } from './StyledRadioContainer';
import { StyledOuterRadio } from './StyledOuterRadio';
import { StyledInnerRadio } from './StyledInnerRadio';

const Radio = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ children, ...props }, ref) => {
  return (
    <StyledRadioContainer>
      <StyledHiddenRadio ref={ref} {...props} />
      <StyledOuterRadio>
        <StyledInnerRadio />
      </StyledOuterRadio>
      {children}
    </StyledRadioContainer>
  );
});

Radio.displayName = 'Radio';

export default Radio;
