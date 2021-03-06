import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card } from '../';
import { Col, Flex, Row } from '../../Flex';
import { Button } from '../../Button';

export default {
  title: 'Components/Card/Card',
  subcomponent: {
    Card,
    'Card.Title': Card.Title,
    'Card.Body': Card.Body,
    'Card.Action': Card.Action,
  },
} as Meta;

export const Default: Story = ({
  headerSrc,
  thumbnailSrc,
  titleText,
  contentText,
}) => {
  return (
    <Flex>
      <Row>
        <Col>
          <Card
            style={{ width: '400px' }}
            headerSrc={headerSrc}
            thumbnailSrc={thumbnailSrc}
          >
            <Card.Title>{titleText}</Card.Title>
            <Card.Body>{contentText}</Card.Body>
            <Card.Action>
              <Button isStretched onClick={() => alert('clicked')}>
                Button Label
              </Button>
            </Card.Action>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

Default.args = {
  headerSrc:
    'https://content.api.news/v3/images/bin/697d5a62d98a5e9833a43cff93792bbe',
  titleText: 'Rosé',
  contentText:
    'Roseanne Park (born February 11, 1997 in Auckland, New Zealand) better known as Rosé, is the main vocalist and lead dancer of South Korean girl group BLACKPINK. ... As a solo singer, she has collaborated with labelmate G-Dragon on his 2012 track "Without You", which peaked at number ten on the Gaon Music Chart.',
};

Default.argTypes = {
  headerSrc: {
    control: 'text',
  },
  titleText: {
    control: 'text',
  },
  contentText: {
    control: 'text',
  },
};

export const CardWithThumbnail: Story = ({
  thumbnailSrc,
  titleText,
  contentText,
}) => {
  return (
    <Flex>
      <Row>
        <Col>
          <Card style={{ width: '400px' }} thumbnailSrc={thumbnailSrc}>
            <Card.Title>{titleText}</Card.Title>
            <Card.Body>{contentText}</Card.Body>
            <Card.Action>
              <Button isStretched onClick={() => alert('clicked')}>
                Button Label
              </Button>
            </Card.Action>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

CardWithThumbnail.args = {
  thumbnailSrc:
    'https://content.api.news/v3/images/bin/697d5a62d98a5e9833a43cff93792bbe',
  titleText: 'Rosé',
  contentText:
    'Roseanne Park (born February 11, 1997 in Auckland, New Zealand) better known as Rosé, is the main vocalist and lead dancer of South Korean girl group BLACKPINK. ... As a solo singer, she has collaborated with labelmate G-Dragon on his 2012 track "Without You", which peaked at number ten on the Gaon Music Chart.',
};

CardWithThumbnail.argTypes = {
  thumbnailSrc: {
    control: 'text',
  },
  titleText: {
    control: 'text',
  },
  contentText: {
    control: 'text',
  },
};
