import styled from 'styled-components';
import { StyledAnchorButton } from '../Button/StyledAnchorButton';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Breadcrumb.breadcrumb_item';

export const StyledBreadcrumbItem = styled.li.attrs({
  'component-blink-id': COMPONENT_ID,
})`
  display: inline-block;
  position: relative;
  padding-right: 2em;
  margin: 0;

  &:after {
    content: '>';
    position: absolute;
    display: inline-block;
    right: 0;
    width: 2em;
    text-align: center;
  }

  &:last-child {
    font-weight: ${props => props.theme.fontWeights.bold};
    pointer-events: none;
    cursor: default;

    ${StyledAnchorButton} {
      max-width: 1000px;
    }

    &:after {
      content: '';
    }
  }

  ${StyledAnchorButton} {
    text-decoration: none;
    display: inline-block;
    color: ${props => getColors('neutral', 700, props.theme)};
    white-space: nowrap;
    max-width: ${props => props.theme.space.xxxl};

    &:hover {
      text-decoration: underline;
    }
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;
