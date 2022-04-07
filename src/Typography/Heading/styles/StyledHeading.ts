import styled from 'styled-components';
import DEFAULT_THEME from '../../../theme';
import { getColors, getComponentStyles } from '../../../theme/utils';

const HEADING_XXXL_ID = 'Typography.headingXXXL';
const HEADING_XXL_ID = 'Typography.headingXXL';
const HEADING_XL_ID = 'Typography.headingXL';
const HEADING_LG_ID = 'Typography.headingLG';
const HEADING_MD_ID = 'Typography.headingMD';
const HEADING_SM_ID = 'Typography.headingSM';
const HEADING_XS_ID = 'Typography.headingXS';

interface IStyledHeadingProps {
  heading?: string;
  color?: string;
}

export const StyledHeadingXXXL = styled.h1.attrs<IStyledHeadingProps>(
  props => ({
    'data-blink-id': HEADING_XXXL_ID,
    as: props.heading,
  }),
)<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props => props.theme.fontSizes.xxxl};
  line-height: normal;

  ${props => getComponentStyles(HEADING_XXXL_ID, props)};
`;

StyledHeadingXXXL.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h1',
};

export const StyledHeadingXXL = styled.div.attrs<IStyledHeadingProps>(
  props => ({
    'data-blink-id': HEADING_XXL_ID,
    as: props.heading,
  }),
)<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: normal;
  ${props => getComponentStyles(HEADING_XXL_ID, props)};
`;

StyledHeadingXXL.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h2',
};

export const StyledHeadingXL = styled.div.attrs<IStyledHeadingProps>(props => ({
  'data-blink-id': HEADING_XL_ID,
  as: props.heading,
}))<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: normal;
  ${props => getComponentStyles(HEADING_XL_ID, props)};
`;

StyledHeadingXL.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h2',
};

export const StyledHeadingLG = styled.div.attrs<IStyledHeadingProps>(props => ({
  'data-blink-id': HEADING_LG_ID,
  as: props.heading,
}))<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props =>
    props.heading === 'h3'
      ? props.theme.fontSizes.md
      : props.theme.fontSizes.lg};
  line-height: normal;
  ${props => getComponentStyles(HEADING_LG_ID, props)};
`;

StyledHeadingLG.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h3',
};

export const StyledHeadingMD = styled.div.attrs<IStyledHeadingProps>(props => ({
  'data-blink-id': HEADING_MD_ID,
  as: props.heading,
}))<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props =>
    props.heading === 'h4'
      ? props.theme.fontSizes.xs
      : props.theme.fontSizes.md};
  line-height: normal;
  ${props => getComponentStyles(HEADING_MD_ID, props)};
`;

StyledHeadingMD.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h4',
};

export const StyledHeadingSM = styled.div.attrs<IStyledHeadingProps>(props => ({
  'data-blink-id': HEADING_SM_ID,
  as: props.heading,
}))<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props => props.theme.fontSizes.xxs};
  line-height: normal;
  ${props => getComponentStyles(HEADING_SM_ID, props)};
`;

StyledHeadingSM.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h5',
};

export const StyledHeadingXS = styled.div.attrs<IStyledHeadingProps>(props => ({
  'data-blink-id': HEADING_XS_ID,
  as: props.heading,
}))<IStyledHeadingProps>`
  display: block;
  color: ${props =>
    props.color ? getColors(props.color, 500, props.theme) : '#000'};
  font-size: ${props => props.theme.fontSizes.xxxs};
  line-height: normal;
  ${props => getComponentStyles(HEADING_XS_ID, props)};
`;

StyledHeadingXS.defaultProps = {
  theme: DEFAULT_THEME,
  heading: 'h6',
};
