/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DefaultTheme } from 'styled-components';
import DEFAULT_THEME from '..';
import { darken, lighten, rgba } from 'polished';

type Hue = Record<number | string, string> | string;

const DEFAULT_SHADE = 600;

function adjust(color: string, expected: number, actual: number) {
  if (expected !== actual) {
    const amount = (Math.abs(expected - actual) / 100) * 0.05;

    return expected > actual ? darken(amount, color) : lighten(amount, color);
  }

  return color;
}

export default function getColors(
  hue: Hue,
  shade: number = DEFAULT_SHADE,
  theme?: DefaultTheme,
  transparency?: number,
) {
  let returnValue;

  if (isNaN(shade)) {
    return undefined;
  }

  const palette =
    theme && theme.palette ? theme.palette : DEFAULT_THEME.palette;
  const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;

  let _hue: Hue;

  if (typeof hue === 'string') {
    _hue = (colors as any)[hue] || hue;
  } else {
    _hue = hue;
  }

  if (Object.prototype.hasOwnProperty.call(palette, _hue as string)) {
    // convert string to a palette hue object
    _hue = palette[_hue as string];
  }

  if (typeof _hue === 'object') {
    returnValue = _hue[shade];

    if (!returnValue) {
      const _shade = Object.keys(_hue)
        .map(hueKey => parseInt(hueKey, 10))
        .reduce((previous, current) => {
          return Math.abs(current - shade) < Math.abs(previous - shade)
            ? current
            : previous;
        });

      returnValue = adjust(_hue[_shade], shade, _shade);
    }
  } else {
    returnValue = adjust(_hue, shade, DEFAULT_SHADE);
  }

  if (transparency) {
    returnValue = rgba(returnValue, transparency);
  }

  return returnValue;
}
