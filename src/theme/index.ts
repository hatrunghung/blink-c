import { DefaultTheme } from 'styled-components';
import PALETTE from './palette';

function fontStack(fonts: string[]): string {
  return fonts
    .map(font => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
}

const BASE = 4;

const borderWidths = {
  sm: `1px`,
  md: `3px`,
};

const borderStyles = {
  solid: 'solid',
};

const borderRadius = {
  sm: `${BASE / 2}px`,
  md: `${BASE}px`,
  lg: `${BASE * 2}px`,
  xl: `${BASE * 3}px`,
  max: `100%`,
};

const borders = {
  sm: (borderColor): string =>
    `${borderWidths.sm} ${borderStyles.solid} ${borderColor}`,
  md: (borderColor): string =>
    `${borderWidths.md} ${borderStyles.solid} ${borderColor}`,
};

const breakpoints = {
  xs: `0px`,
  sm: `${BASE * 144}px`,
  md: `${BASE * 192}px`,
  lg: `${BASE * 248}px`,
  xl: `${BASE * 300}px`,
};

const colors = {
  light_background: PALETTE.white,
  dark_background: PALETTE.black,
  foreground: PALETTE.grey[700],
  primary: 'blue',
  danger: 'red',
  warning: 'yellow',
  success: 'green',
  failure: 'volcano',
  chrome: 'pink',
  neutral: 'grey',
};

const fonts = {
  mono: fontStack([
    'SFMono-Regular' /* macOS */,
    'Consolas' /* Windows */,
    'Liberation Mono' /* Ubuntu */,
    'Menlo',
    'Courier',
    'monospace',
  ]),
  system: fontStack([
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Ubuntu',
    'Helvetica',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ]),
};

/* Major Third Typescale */
const fontSizes = {
  xxxs: `10px`,
  xxs: `12px`,
  xs: `16px`,
  sm: `18px`,
  md: `20px`,
  lg: `25px`,
  xl: `31px`,
  xxl: `39px`,
  xxxl: `48px`,
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const iconSizes = {
  sm: `${BASE * 3}px`,
  md: `${BASE * 4}px`,
  lg: `${BASE * 6}px`,
};

const lineHeights = {
  sm: `${BASE * 4}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 6}px`,
  xl: `${BASE * 7}px`,
  xxl: `${BASE * 8}px`,
  xxxl: `${BASE * 11}px`,
};

const shadowWidths = {
  sm: `2px`,
  md: `3px`,
};

const shadows = {
  sm: (color: string): string => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: (color: string): string => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY: string, blurRadius: string, color: string): string =>
    `0 ${offsetY} ${blurRadius} 0 ${color}`,
};

const space = {
  base: BASE,
  xxs: `${BASE}px`,
  xs: `${BASE * 2}px`,
  sm: `${BASE * 3}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 8}px`,
  xl: `${BASE * 11}px`,
  xxl: `${BASE * 13}px`,
  xxxl: `${BASE * 24}px`,
};

const DEFAULT_THEME: DefaultTheme = {
  borders,
  borderWidths,
  borderRadius,
  borderStyles,
  breakpoints,
  colors: {
    base: 'light',
    ...colors,
  },
  fonts,
  fontWeights,
  fontSizes,
  iconSizes,
  lineHeights,
  components: {},
  palette: { ...PALETTE },
  shadowWidths,
  shadows,
  space,
  rtl: false,
};

export default DEFAULT_THEME;
