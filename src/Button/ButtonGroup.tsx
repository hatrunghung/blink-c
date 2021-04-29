import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useButtonGroup } from '../hooks';
import { ButtonGroupContext } from '../contexts/ButtonGroupContext';
import { StyledButtonGroup } from './StyledButtonGroup';

export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  selectedItem?: any;
  onSelect?: (item: any) => void;
}

const ButtonGroup: React.FunctionComponent<IButtonGroupProps> = ({
  children,
  onSelect,
  selectedItem: controllledSelectedItem,
  ...props
}) => {
  const { selectedItem, getButtonGroupProps, getButtonProps } = useButtonGroup({
    selectedItem: controllledSelectedItem,
    defaultSelectedIndex: 0,
    onSelect,
  });

  const contextValue = { selectedItem, getButtonProps };
  return (
    <ButtonGroupContext.Provider value={contextValue}>
      <StyledButtonGroup {...(getButtonGroupProps(props) as any)}>
        {children}
      </StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  selectedItem: PropTypes.any,
  onSelect: PropTypes.func,
};

export default ButtonGroup;
