import React, { forwardRef, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { SquareFilled, Check } from 'blinkicon';
import { StyledCheckboxContainer } from './styles/StyledCheckboxContainer';
import { StyledHiddenCheckbox } from './styles/StyledHiddenCheckbox';
import { StyledVisibleCheckbox } from './styles/StyledVisibleCheckbox';
import { StyledCheckboxTitle } from './styles/StyledCheckboxTitle';
import { useCheckbox } from '../hooks/useCheckbox';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ checked, indeterminate, children, disabled, ...props }, ref) => {
    const { getCheckboxProps } = useCheckbox({ checked, indeterminate });
    const inputRef = (inputElement: HTMLInputElement) => {
      inputElement && ((inputElement as any).indeterminate = indeterminate);
    };

    const combinedRef = (inputElement: HTMLInputElement) => {
      const listRef = [inputRef, ref];

      listRef.forEach(targetRef => {
        if (targetRef) {
          if (typeof targetRef === 'function') {
            targetRef(inputElement);
          } else {
            (targetRef as any).current = inputElement;
          }
        }
      });
    };

    return (
      <StyledCheckboxContainer>
        <StyledHiddenCheckbox
          {...getCheckboxProps({
            ref: combinedRef,
            checked,
            disabled,
            ...props,
          })}
        />
        <StyledVisibleCheckbox
          indeterminate={indeterminate}
          checked={checked}
          disabled={disabled}
        >
          {indeterminate ? <SquareFilled /> : checked ? <Check /> : null}
        </StyledVisibleCheckbox>
        <StyledCheckboxTitle disabled={disabled}>
          {children}
        </StyledCheckboxTitle>
      </StyledCheckboxContainer>
    );
  },
);

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  checked: false,
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
};

export default Checkbox;
