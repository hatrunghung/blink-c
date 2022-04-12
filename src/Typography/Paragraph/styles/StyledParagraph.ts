import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../../theme';
import { getComponentStyles, getLineHeight } from '../../../theme/utils';

export interface IStyledParagraphProps {
  size: 'large' | 'medium' | 'small';
  isBold?: boolean;
}

const COMPONENT_ID = 'Typography.paragraph';

const getParagraphSize = (
  props: IStyledParagraphProps & ThemeProps<DefaultTheme>,
) => {
  let fontSizeValue;
  let lineHeightValue;

  if (props.size === 'large') {
    fontSizeValue = props.theme.fontSizes.sm;
    lineHeightValue = getLineHeight(
      props.theme.lineHeights.xl,
      props.theme.fontSizes.sm,
    );
  } else if (props.size === 'medium') {
    fontSizeValue = props.theme.fontSizes.xs;
    lineHeightValue = getLineHeight(
      props.theme.lineHeights.lg,
      props.theme.fontSizes.xs,
    );
  } else {
    fontSizeValue = props.theme.fontSizes.xxs;
    lineHeightValue = getLineHeight(
      props.theme.lineHeights.sm,
      props.theme.fontSizes.xxs,
    );
  }

  return css`
    font-size: ${fontSizeValue};
    line-height: ${lineHeightValue};
  `;
};

export const StyledParagraph = styled.div.attrs<IStyledParagraphProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledParagraphProps>`
  font-weight: ${props =>
    props.isBold
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.regular};

  ${props => getParagraphSize(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledParagraph.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'small',
};
