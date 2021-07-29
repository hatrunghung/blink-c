import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import Checkbox from '../Checkbox';
import { Grid, Row, Col } from '../../Grid';
import { useCheckbox } from '../../hooks/useCheckbox';

export default {
  title: 'Components/Checkbox/Checkbox',
  component: Checkbox,
} as Meta;

const reducer = (state, action) => {
  switch (action.type) {
    case 'jisoo':
      return { ...state, jisoo: !state.jisoo };
    case 'jennie':
      return { ...state, jennie: !state.jennie };
    case 'rose':
      return { ...state, rose: !state.rose };
    case 'lisa':
      return { ...state, lisa: !state.lisa };
    case 'on_all':
      return {
        jisoo: true,
        jennie: true,
        rose: true,
        lisa: true,
      };
    case 'off_all':
      return {
        jisoo: false,
        jennie: false,
        rose: false,
        lisa: false,
      };
    default:
      return state;
  }
};

const StyledCheckboxGroup = styled.div`
  margin-left: 16px;
`;

export const Default: Story = () => {
  const [state, dispatch] = useReducer(reducer, {
    jisoo: false,
    jennie: false,
    rose: false,
    lisa: false,
  });

  const { jisoo, jennie, rose, lisa } = state;

  const checked = jisoo && jennie && rose && lisa;

  const { getCheckboxGroupProps } = useCheckbox({ checked });

  const onChangeParent = () => {
    if (jisoo || jennie || rose || lisa) {
      dispatch({ type: 'on_all' });
    }
    if (!jisoo || !jennie || !rose || !lisa) {
      dispatch({ type: 'on_all' });
    }
    if (jisoo && jennie && rose && lisa) {
      dispatch({ type: 'off_all' });
    }
  };

  return (
    <Grid>
      <Row>
        <Col>
          <Checkbox
            indeterminate={
              !jisoo && !jennie && !rose && !lisa
                ? false
                : !jisoo || !jennie || !rose || !lisa
            }
            checked={jisoo && jennie && rose && lisa}
            onChange={onChangeParent}
          >
            All your Bias
          </Checkbox>
          <StyledCheckboxGroup {...getCheckboxGroupProps()}>
            <Checkbox
              checked={jisoo}
              onChange={() => dispatch({ type: 'jisoo' })}
            >
              Jisoo
            </Checkbox>

            <Checkbox
              checked={jennie}
              onChange={() => dispatch({ type: 'jennie' })}
            >
              Jennie
            </Checkbox>
            <Checkbox
              checked={rose}
              onChange={() => dispatch({ type: 'rose' })}
            >
              Rosé
            </Checkbox>
            <Checkbox
              checked={lisa}
              onChange={() => dispatch({ type: 'lisa' })}
            >
              Lisa
            </Checkbox>
          </StyledCheckboxGroup>
        </Col>
      </Row>
    </Grid>
  );
};