// declaration file for Typescript definition for styled-components
import 'styled-components';

declare module 'styled-components' {
  type Hue = Record<number | string, string> | string;

  export interface DefaultTheme {
    rtl: boolean;
    document?: any;
    borders: {
      sm: string;
      md: string;
    };
    borderRadius: {
      sm: string;
      md: string;
    };
    borderStyles: {
      solid: string;
    };
    borderWidths: {
      sm: string;
      md: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      base: 'dark' | 'light';
      background: string;
      foreground: string;
      primary: string;
      danger: string;
      warning: string;
      success: string;
      failure: string;
      chrome: string;
      neutral: string;
    };
    components: Record<string, any>;
    fonts: {
      mono: string;
      system: string;
    };
    fontSizes: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeights: {
      thin: number;
      extralight: number;
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    iconSizes: {
      sm: string;
      md: string;
      lg: string;
    };
    lineHeights: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    shadowWidths: {
      sm: string;
      md: string;
    };
    shadows: {
      sm: (color: string) => string;
      md: (color: string) => string;
      lg: (offsetY: string, blurRadius: string, color: string) => string;
    };
    space: {
      base: number;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    palette: Record<string, Hue>;
  }
}
