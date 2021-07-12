import React, { FunctionComponent, HTMLAttributes } from 'react';
import { useStepContext } from '../contexts/useStepContext';
import { useStepperContext } from '../contexts/useStepperContext';
import { StyledTitle } from './StyledTitle';

export const StepTitle: FunctionComponent &
  HTMLAttributes<HTMLDivElement> = props => {
  const { direction, size, colorType, activeStep } = useStepperContext();
  const { currentStepIndex } = useStepContext();

  let currentStatus;

  if (currentStepIndex < activeStep) {
    currentStatus = 'finished';
  } else if (currentStepIndex > activeStep) {
    currentStatus = 'waiting';
  } else {
    currentStatus = 'processing';
  }

  return (
    <StyledTitle
      direction={direction}
      size={size}
      colorType={colorType}
      status={currentStatus}
    >
      {props.children}
    </StyledTitle>
  );
};
