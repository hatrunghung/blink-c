import styled from 'styled-components';
import { StyledAnchorButton } from '../Button/StyledAnchorButton';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

const COMPONENT_ID = 'Breadcrumb_breadcrumb';

export const StyledBreadcrumb = styled.ul.attrs({
  'component-blink-id': COMPONENT_ID,
})`
  list-style-type: none;
  margin: 0;
  padding: 1em;
  color: ${props => getColors('neutral', 700, props.theme)};

  ${StyledBreadcrumbItem} > ${StyledAnchorButton} {
    &:hover {
      max-width: 1000px;
    }
  }

  ${props => getComponentStyles(COMPONENT_ID, props)}
`;

StyledBreadcrumb.defaultProps = {
  theme: DEFAULT_THEME,
};
