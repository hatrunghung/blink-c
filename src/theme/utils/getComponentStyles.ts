/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeProps, DefaultTheme } from 'styled-components';

export default function getComponentStyles(
  componentId: string,
  props: Partial<ThemeProps<Partial<DefaultTheme>>>,
) {
  const components = props.theme && props.theme.components;

  if (!components) {
    return undefined;
  }

  const componentStyles = components[componentId];

  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }

  return componentStyles;
}
