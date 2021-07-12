import React, {
  FunctionComponent,
  HTMLAttributes,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useStepperContext } from '../contexts/useStepperContext';
import { StepContext } from '../contexts/useStepContext';
import { StyledStep } from './StyledStep';

export const Step: FunctionComponent &
  HTMLAttributes<HTMLDivElement> = props => {
  const { direction, currentIndexRef } = useStepperContext();
  const [currentStepIndex, setCurrentStepIndex] = useState(
    currentIndexRef.current,
  );

  useEffect(() => {
    setCurrentStepIndex(currentIndexRef.current);
    currentIndexRef.current++;
    const currentIndex = currentIndexRef;

    return () => {
      currentIndex.current--;
    };
  }, [currentIndexRef]);

  const value = useMemo(() => ({ currentStepIndex }), [currentStepIndex]);

  return (
    <StepContext.Provider value={value}>
      <StyledStep direction={direction} {...props}>
        {props.children}
      </StyledStep>
    </StepContext.Provider>
  );
};

Step.displayName = 'Step';
