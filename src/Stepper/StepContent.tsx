import React, { FunctionComponent, HTMLAttributes } from 'react';
import { useStepperContext } from '../contexts/useStepperContext';
import { StyledContent } from './styles/StyledContent';

const StepContent: FunctionComponent &
  HTMLAttributes<HTMLDivElement> = props => {
  const { direction, size } = useStepperContext();

  return (
    <StyledContent direction={direction} size={size}>
      {props.children}
    </StyledContent>
  );
};

StepContent.displayName = 'StepContent';

export default StepContent;
