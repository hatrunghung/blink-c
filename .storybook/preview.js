import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { create } from '@storybook/theming/create';
import DEFAULT_THEME from '../src/theme';
import { ThemeProvider } from '../src/theme/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  background: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  docs: {
    theme: create({
      base: DEFAULT_THEME.colors.base,
    }),
  },
};

const GlobalPreviewStyling = createGlobalStyle`
  body: {
    background-color: ${p => p.theme.colors.background};
    font-family: ${p => p.theme.fonts.system};
    font-size: ${p => p.theme.fontSizes.md};
  }
`;

const StyledExampleWrapper = styled.div`
  direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
  padding: ${p => p.theme.space.xl};
`;

const withThemeProvider = (Story, context) => {
  const rtl = context.globals.locale === 'rtl';
  const theme = {
    ...DEFAULT_THEME,
    colors: { ...DEFAULT_THEME.colors, primary: context.globals.primary },
    rtl,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalPreviewStyling />

      <StyledExampleWrapper>{Story()}</StyledExampleWrapper>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const globalTypes = {
  locale: {
    name: 'direction',
    description: 'Locale display direction',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ltr', title: 'LTR' },
        { value: 'rtl', title: 'RTL' },
      ],
    },
  },
  primary: {
    name: 'primary',
    description: 'Primary hue color for theme',
    defaultValue: DEFAULT_THEME.colors.primary,
    toolbar: {
      icon: 'paintbrush',
      items: [
        {
          value: DEFAULT_THEME.colors.primary,
          title: 'Default Primary hue color',
        },
        { value: 'pink', title: 'Custom Primary Hue color' },
      ],
    },
  },
};
