import React, { Children } from 'react';
import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Tag.tag_icon';

export const StyledTagIcon = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props),
).attrs({
  'data-blink-id': COMPONENT_ID,
})`
  flex-shrink: 0;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledTagIcon.defaultProps = {
  theme: DEFAULT_THEME,
};
