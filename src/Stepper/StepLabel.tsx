import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Check } from 'blinkicon';
import { useStepContext } from '../contexts/useStepContext';
import { useStepperContext } from '../contexts/useStepperContext';
import { StyledTail } from './styles/StyledTail';
import { StyledIcon } from './styles/StyledIcon';

const StepLabel: FunctionComponent & HTMLAttributes<HTMLDivElement> = () => {
  const { direction, size, colorType, activeStep } = useStepperContext();
  const { currentStepIndex } = useStepContext();
  let currentStatus;
  const numericStep = currentStepIndex + 1;

  if (currentStepIndex < activeStep) {
    currentStatus = 'finished';
  } else if (currentStepIndex > activeStep) {
    currentStatus = 'waiting';
  } else {
    currentStatus = 'processing';
  }

  return (
    <>
      <StyledTail
        direction={direction}
        size={size}
        colorType={colorType}
        status={currentStatus}
      />
      <StyledIcon
        direction={direction}
        size={size}
        colorType={colorType}
        status={currentStatus}
      >
        {currentStatus === 'finished' ? <Check /> : numericStep}
      </StyledIcon>
    </>
  );
};

export default StepLabel;
