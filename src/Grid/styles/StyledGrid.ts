import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';
import { FIT, GRID_NUMBER, SPACE } from '../types';

const COMPONENT_ID = 'Grid.grid';

export interface IStyledGridProps extends ThemeProps<DefaultTheme> {
  columns?: GRID_NUMBER;
  rows?: GRID_NUMBER | 'auto';
  filling?: FIT;
  colMinWidth?: string;
  colGap?: SPACE;
  rowGap?: SPACE;
}

function getGridStyles(props: IStyledGridProps) {
  let gridTemplateRowsValue;
  let gridTemplateColumnsValue;

  if (typeof props.columns === 'string') {
    gridTemplateColumnsValue = props.columns;
  } else {
    gridTemplateColumnsValue = `repeat(${props.columns}, 1fr)`;
  }

  if (props.rows === 'auto') {
    gridTemplateRowsValue = 'auto';
  } else if (typeof props.rows === 'string') {
    gridTemplateRowsValue = props.rows;
  } else {
    gridTemplateRowsValue = `repeat(${props.rows}, 1fr)`;
  }

  return css`
    grid-template-columns: ${gridTemplateColumnsValue};
    grid-template-rows: ${gridTemplateRowsValue};

    &[data-blink-grid-filling-type='fit'] {
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(${props.colMinWidth}, 100%), 1fr)
      );
    }

    &[data-blink-grid-filling-type='fill'] {
      grid-template-columns: repeat(
        auto-fill,
        minmax(min(${props.colMinWidth}, 100%), 1fr)
      );
    }
  `;
}

function getGridGapStyles(props: IStyledGridProps) {
  const gridColGapValue = props.colGap ? props.theme.space[props.colGap] : 0;
  const gridRowGapValue = props.rowGap ? props.theme.space[props.rowGap] : 0;

  return css`
    column-gap: ${gridColGapValue};
    row-gap: ${gridRowGapValue};
  `;
}

export const StyledGrid = styled.div.attrs<IStyledGridProps>(props => ({
  'data-blink-id': COMPONENT_ID,
  'data-blink-grid-filling-type': props.filling,
}))<IStyledGridProps>`
  display: grid;
  margin: 0;
  padding: 0;

  ${props => getGridStyles(props)};

  ${props => getGridGapStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledGrid.defaultProps = {
  theme: DEFAULT_THEME,
  colGap: 'md',
  rowGap: 'md',
};
