import { ThemeProps, DefaultTheme } from 'styled-components';

/**
 *
 *
 * @export
 * @param {Partial<ThemeProps<Partial<DefaultTheme>>>} [props={}]
 * @returns {*}
 */

export default function getDocument(
  props: Partial<ThemeProps<Partial<DefaultTheme>>> = {},
): any {
  return props.theme?.document || document;
}
