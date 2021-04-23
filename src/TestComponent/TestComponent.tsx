import React from 'react';
import styled from 'styled-components';

import { TestComponentProps } from './TestComponent.types';

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
  ${props =>
    props.theme === 'secondary' &&
    `background-color: black;
     color: white;`}
`;

const StyledHeading = styled.h1`
  font-size: 32px;
`;

const StyledDescription = styled.h2``;

const TestComponent: React.FunctionComponent<TestComponentProps> = ({
  // eslint-disable-next-line react/prop-types
  theme,
}) => (
  <StyledDiv data-testid="test-component" theme={theme}>
    <StyledHeading className="heading">The test component</StyledHeading>
    <StyledDescription>Made with love by Hung</StyledDescription>
  </StyledDiv>
);

export default TestComponent;
