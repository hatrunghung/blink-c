import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import Stepper from '../Stepper';
import { Button } from '../../Button';

export default {
  title: 'Components/Stepper/Stepper',
  subcomponent: {
    Stepper,
    'Stepper.Step': Stepper.Step,
    'Stepper.Label': Stepper.Label,
    'Stepper.Content': Stepper.Content,
    'Stepper.Title': Stepper.Title,
    'Stepper.Description': Stepper.Description,
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
        <Stepper.Step>
          <Stepper.Label></Stepper.Label>
          <Stepper.Content>
            <Stepper.Title>First Step</Stepper.Title>
            <Stepper.Description>This is a description</Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label></Stepper.Label>
          <Stepper.Content>
            <Stepper.Title>Second Step</Stepper.Title>
            <Stepper.Description>This is a description</Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label></Stepper.Label>
          <Stepper.Content>
            <Stepper.Title>Third Step</Stepper.Title>
            <Stepper.Description>This is a description</Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label></Stepper.Label>
          <Stepper.Content>
            <Stepper.Title>Final Step</Stepper.Title>
            <Stepper.Description>This is a description</Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
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
