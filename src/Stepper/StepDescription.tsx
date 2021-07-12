import React, { FunctionComponent, HTMLAttributes } from 'react';
import { useStepContext } from '../contexts/useStepContext';
import { useStepperContext } from '../contexts/useStepperContext';
import { StyledDescription } from './StyledDescription';

export const StepDescription: FunctionComponent &
  HTMLAttributes<HTMLDivElement> = props => {
  const { direction, size, activeStep } = useStepperContext();
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
    <StyledDescription direction={direction} size={size} status={currentStatus}>
      {props.children}
    </StyledDescription>
  );
};
