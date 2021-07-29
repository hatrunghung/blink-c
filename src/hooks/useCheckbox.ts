import { HTMLProps } from 'react';

export interface IUseCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
}

export interface ICheckboxProps extends HTMLProps<any> {
  role?: string;
}

export interface ICheckboxGroupProps extends HTMLProps<any> {
  role?: string;
  prefix?: string;
}

export interface IUseCheckboxReturnValue {
  getCheckboxGroupProps: <T>(options?: T & ICheckboxGroupProps) => any;
  getCheckboxProps: <T>(options?: T & ICheckboxProps) => any;
}

export function useCheckbox({
  checked = false,
  indeterminate,
}: IUseCheckboxProps): IUseCheckboxReturnValue {
  const getCheckboxGroupProps = ({ ...props }: ICheckboxGroupProps) => {
    return {
      role: 'group',
      ...props,
    };
  };

  const getCheckboxProps = ({
    role = 'checkbox',
    ...props
  }: ICheckboxProps) => {
    return {
      role,
      'aria-checked': indeterminate ? 'mixed' : checked,
      tabindex: 0,
      ...props,
    };
  };

  return {
    getCheckboxGroupProps,
    getCheckboxProps,
  };
}
