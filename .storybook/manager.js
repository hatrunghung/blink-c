import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import DEFAULT_THEME from '../src/theme';

addons.setConfig({
  showPanel: true,
  theme: create({
    brandTitle: 'Blink React Components',
    brandImage: null,
    colorSecondary: DEFAULT_THEME.palette.blue[600],
    fontBase: DEFAULT_THEME.fonts.system,
    fontCode: DEFAULT_THEME.fonts.mono,
  }),
});
