import { createContext, useContext } from 'react';

export interface ICardContext {
  thumbnailSrc?: string;
  headerSrc?: string;
}

export const CardContext = createContext<ICardContext>({});

export const useCardContext = (): ICardContext => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      'No Context found! You must use the component within <Card /> component',
    );
  }

  return context;
};
