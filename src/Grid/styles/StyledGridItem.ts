import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Grid.grid_item';

export interface IStyledGridItemProps extends ThemeProps<DefaultTheme> {
  isFullWidth?: boolean;
  column?: string;
  row?: string;
}

function getGridItemSpan(props: IStyledGridItemProps) {
  return css`
    display: block;
    grid-column: ${props.column};
    grid-row: ${props.row};

    &[data-blink-grid-item-fullwidth='true'] {
      grid-column: 1 / -1;
    }
  `;
}

export const StyledGridItem = styled.div.attrs<IStyledGridItemProps>(props => ({
  'data-blink-id': COMPONENT_ID,
  'data-blink-grid-item-fullwidth': props.isFullWidth,
}))<IStyledGridItemProps>`
  ${props => getGridItemSpan(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledGridItem.defaultProps = {
  theme: DEFAULT_THEME,
};
