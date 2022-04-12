import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paragraph } from '../Paragraph';
import { Flex, Row, Col } from '../../Flex';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as Meta;

export const Default: Story = ({ size, isBold }) => {
  return (
    <Flex>
      <Row>
        <Col>
          <Paragraph size={size} isBold={isBold}>
            Jisoo was born on January 3, 1995 in Gunpo. She&rsquo;s a member of
            Blackpink. She became a YG Entertainment trainee in August 2011
            &amp; trained for 5 years. In August 2016, she became a member of
            Blackpink, as a lead vocalist &amp; visualist in the group. Before
            she became a trainee at YG, she was known by many for her beauty.
            She was very popular in school because of her beautiful face and
            talents. She used to study at the School Of Performing Arts High
            School. She eventually transferred schools when her family moved to
            Seoul, South Korea. In 2012, she was revealed through the
            &ldquo;Who&rsquo;s That Girl?&rdquo; teaser by YG Entertainment, and
            it was followed with two photos in January of the next year. On
            August 18, 2020, YG Entertainment announced that Jisoo will be
            making her acting debut. She will be debuting as the lead role in
            the upcoming JTBC drama, Snowdrop. The drama is expected to air
            sometime in 2021. On December 30, 2020, it was announced that Jisoo
            will be having her solo debut when the filming for her drama,
            Snowdrop is finished. On August 18, a video was posted onto JTBC
            Drama&rsquo;s YouTube channel announcing Snowdrop as part of the
            upcoming Drama Line-up.
          </Paragraph>
        </Col>
      </Row>
    </Flex>
  );
};

Default.args = {
  size: 'medium',
  isBold: false,
};

Default.argTypes = {
  size: {
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  isBold: {
    control: 'boolean',
  },
};
