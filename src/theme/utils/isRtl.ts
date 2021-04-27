import { ThemeProps, DefaultTheme } from 'styled-components';

/**
 *
 *
 * @export
 * @param {Partial<ThemeProps<Partial<DefaultTheme>>>} [props={}]
 * @returns {boolean}
 */

export default function isRtl(
  props: Partial<ThemeProps<Partial<DefaultTheme>>> = {},
): boolean {
  return Boolean(props.theme?.rtl);
}
