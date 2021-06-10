import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
  ThemeProps,
} from 'styled-components';
import DEFAULT_THEME from '../theme';

export interface IThemeProviderProps extends Partial<ThemeProps<DefaultTheme>> {
  theme?: DefaultTheme;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledThemeProvider theme={DEFAULT_THEME} {...props}>
      {children}
    </StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: DEFAULT_THEME,
};
