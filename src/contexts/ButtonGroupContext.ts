import React from 'react';

export interface IButtonGroupContext {
  selectedItem: any;
  getButtonProps: (props: any) => any;
}

export const ButtonGroupContext = React.createContext<
  IButtonGroupContext | undefined
>(undefined);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useButtonGroupContext() {
  return React.useContext(ButtonGroupContext);
}
