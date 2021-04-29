import React from 'react';

export const SplitButtonContext = React.createContext<boolean | undefined>(
  undefined,
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useSplitButtonContext() {
  return React.useContext(SplitButtonContext);
}
