import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { Stepper } from '../Stepper';
import { Step } from '../Step';
import { StepLabel } from '../StepLabel';
import { StepContent } from '../StepContent';
import { StepTitle } from '../StepTitle';
import { StepDescription } from '../StepDescription';
import { Button } from '../../Button';

export default {
  title: 'Components/Stepper/Stepper',
  subcomponent: {
    Stepper,
    Step,
    StepLabel,
    StepContent,
    StepTitle,
    StepDescription,
  },
} as Meta;

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  padding: 16px;
`;

const StyledButtonContainer = styled.div`
  margin: 0 16px;
`;

export const Default: Story = ({ direction, size, colorType }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onNext = () => setCurrentStep(currentStep + 1);
  const onBack = () => setCurrentStep(currentStep - 1);

  return (
    <>
      <Stepper
        activeStep={currentStep}
        direction={direction}
        size={size}
        colorType={colorType}
      >
        <Step>
          <StepLabel></StepLabel>
          <StepContent>
            <StepTitle>First Step</StepTitle>
            <StepDescription>This is a description</StepDescription>
          </StepContent>
        </Step>
        <Step>
          <StepLabel></StepLabel>
          <StepContent>
            <StepTitle>Second Step</StepTitle>
            <StepDescription>This is a description</StepDescription>
          </StepContent>
        </Step>
        <Step>
          <StepLabel></StepLabel>
          <StepContent>
            <StepTitle>Third Step</StepTitle>
            <StepDescription>This is a description</StepDescription>
          </StepContent>
        </Step>
        <Step>
          <StepLabel></StepLabel>
          <StepContent>
            <StepTitle>Final Step</StepTitle>
            <StepDescription>This is a description</StepDescription>
          </StepContent>
        </Step>
      </Stepper>
      <StyledDivContainer>
        {currentStep > 0 ? (
          <StyledButtonContainer>
            <Button onClick={onBack}>Back</Button>
          </StyledButtonContainer>
        ) : null}
        {currentStep < 3 ? (
          <StyledButtonContainer>
            <Button onClick={onNext}>Next</Button>
          </StyledButtonContainer>
        ) : null}
        {currentStep === 3 ? (
          <StyledButtonContainer>
            <Button onClick={() => alert('Done!')}>Done</Button>
          </StyledButtonContainer>
        ) : null}
      </StyledDivContainer>
    </>
  );
};

Default.argTypes = {
  direction: {
    name: 'Direction',
    control: { type: 'radio', options: ['horizontal', 'vertical'] },
  },
  size: {
    name: 'Size',
    control: { type: 'radio', options: ['small', 'default'] },
  },
  colorType: {
    name: 'Color',
    control: { type: 'radio', options: ['primary', 'basic'] },
  },
};

Default.args = {
  direction: 'horizontal',
  size: 'default',
  colorType: 'primary',
};

// Default.parameters = {
// 	docs: {
// 		description
// 	}
// }
