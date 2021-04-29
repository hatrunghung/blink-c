import React, { HTMLAttributes } from 'react';
import { SplitButtonContext } from '../contexts/useSplitButtonContext';
import { StyledButtonGroup } from './StyledButtonGroup';

const SplitButton: React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <SplitButtonContext.Provider value={true}>
      <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
    </SplitButtonContext.Provider>
  );
};

export default SplitButton;
