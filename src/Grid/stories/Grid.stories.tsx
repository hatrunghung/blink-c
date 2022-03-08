import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Grid } from '..';

export default {
  title: 'Components/Grid/Grid',
  subcomponent: {
    'Grid.Item': Grid.Item,
  },
} as Meta;

const styles = {
  backgroundColor: '#1f73b7',
  color: 'white',
  padding: '24px',
};

export const Default: Story = () => {
  return (
    <Grid columns={12} rows="auto">
      <Grid.Item style={styles}>1</Grid.Item>
      <Grid.Item style={styles}>2</Grid.Item>
      <Grid.Item style={styles}>3</Grid.Item>
      <Grid.Item style={styles}>4</Grid.Item>
      <Grid.Item style={styles}>5</Grid.Item>
      <Grid.Item style={styles}>6</Grid.Item>
      <Grid.Item style={styles}>7</Grid.Item>
      <Grid.Item style={styles}>8</Grid.Item>
      <Grid.Item style={styles}>9</Grid.Item>
      <Grid.Item style={styles}>10</Grid.Item>
      <Grid.Item style={styles}>11</Grid.Item>
      <Grid.Item style={styles}>12</Grid.Item>
    </Grid>
  );
};

export const LinesWithSpan: Story = () => {
  return (
    <Grid columns="repeat(4, [col] 100px)" rows="repeat(3, [row] auto)">
      <Grid.Item column="col / span 2" style={styles}>
        1
      </Grid.Item>
      <Grid.Item column="col 3 / span 2" style={styles}>
        2
      </Grid.Item>
      <Grid.Item row="row 2" style={styles}>
        3
      </Grid.Item>
      <Grid.Item column="col 2 / span 3" style={styles}>
        4
      </Grid.Item>
      <Grid.Item column="col / span 4" style={styles}>
        5
      </Grid.Item>
    </Grid>
  );
};

export const GridWithFill: Story = () => {
  return (
    <Grid colMinWidth="200px" filling="fill">
      <Grid.Item style={styles}>1</Grid.Item>
      <Grid.Item style={styles}>2</Grid.Item>
      <Grid.Item style={styles}>3</Grid.Item>
      <Grid.Item style={styles}>4</Grid.Item>
      <Grid.Item row="span 2" style={styles}>
        5
      </Grid.Item>
      <Grid.Item row="span 2" style={styles}>
        6
      </Grid.Item>
      <Grid.Item row="2" style={styles}>
        7
      </Grid.Item>
      <Grid.Item row="2" style={styles}>
        8
      </Grid.Item>
      <Grid.Item column="span 2" row="2" style={styles}>
        9
      </Grid.Item>
      <Grid.Item column="5 / span 2" row="1 / span 2" style={styles}>
        10
      </Grid.Item>
    </Grid>
  );
};

export const GridWithFit: Story = () => {
  return (
    <Grid colMinWidth="200px" filling="fit">
      <Grid.Item style={styles}>1</Grid.Item>
      <Grid.Item style={styles}>2</Grid.Item>
      <Grid.Item style={styles}>3</Grid.Item>
      <Grid.Item style={styles}>4</Grid.Item>
      <Grid.Item row="span 2" style={styles}>
        5
      </Grid.Item>
      <Grid.Item row="span 2" style={styles}>
        6
      </Grid.Item>
      <Grid.Item row="2" style={styles}>
        7
      </Grid.Item>
      <Grid.Item row="2" style={styles}>
        8
      </Grid.Item>
      <Grid.Item column="span 2" row="2" style={styles}>
        9
      </Grid.Item>
      <Grid.Item column="5 / span 2" row="1 / span 2" style={styles}>
        10
      </Grid.Item>
    </Grid>
  );
};

export const GridWithFullWidthCol: Story = () => {
  return (
    <Grid columns={12} rows={3}>
      <Grid.Item isFullWidth style={styles}>
        1
      </Grid.Item>
      <Grid.Item column="1 / span 2" row="2 / span 2" style={styles}>
        2
      </Grid.Item>
      <Grid.Item column="span 3" row="3" style={styles}>
        3
      </Grid.Item>
      <Grid.Item style={styles}>4</Grid.Item>
      <Grid.Item style={styles}>5</Grid.Item>
      <Grid.Item style={styles}>6</Grid.Item>
      <Grid.Item column="span 2" row="span 2" style={styles}>
        7
      </Grid.Item>
      <Grid.Item column="8 / -1" style={styles}>
        8
      </Grid.Item>
      <Grid.Item column="8 / -1" row="3" style={styles}>
        9
      </Grid.Item>
    </Grid>
  );
};
