import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { SquareFilled, Check } from 'blinkicon';
import { StyledCheckboxContainer } from './StyledCheckboxContainer';
import { StyledHiddenCheckbox } from './StyledHiddenCheckbox';
import { StyledVisibleCheckbox } from './StyledVisibleCheckbox';
import { StyledCheckboxTitle } from './StyledCheckboxTitle';
import { useCheckbox } from '../hooks/useCheckbox';

export interface ICheckboxProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ checked, indeterminate, children, ...props }, ref) => {
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
          {...getCheckboxProps({ ref: combinedRef, checked, ...props })}
        />
        <StyledVisibleCheckbox indeterminate={indeterminate} checked={checked}>
          {indeterminate ? <SquareFilled /> : checked ? <Check /> : null}
        </StyledVisibleCheckbox>
        <StyledCheckboxTitle>{children}</StyledCheckboxTitle>
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
  indeterminate: PropTypes.bool,
};

export default Checkbox;