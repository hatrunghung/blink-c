import React from 'react';
import { Story, Meta } from '@storybook/react';
import Accordion from '../Accordion';

export default {
  title: 'Components/Accordions/Accordion',
  subcomponent: {
    Accordion,
    'Accordion.Section': Accordion.Section,
    'Accordion.Header': Accordion.Header,
    'Accordion.Label': Accordion.Label,
    'Accordion.Panel': Accordion.Panel,
  },
} as Meta;

interface IStoryProps {
  accordionType: 'basic' | 'borderless' | 'ghost';
  isExpandable: boolean;
}

export const Default: Story<IStoryProps> = ({
  accordionType,
  isExpandable,
}) => {
  return (
    <Accordion
      level={3}
      accordionType={accordionType}
      isExpandable={isExpandable}
    >
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Section 1 Title</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Section 2 Title</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Section 3 Title</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Section 4 Title</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </Accordion.Panel>
      </Accordion.Section>
    </Accordion>
  );
};

Default.args = {
  accordionType: 'basic',
  isExpandable: true,
};

Default.argTypes = {
  accordionType: {
    control: { type: 'radio', options: ['basic', 'ghost', 'borderless'] },
  },
  isExpandable: {
    control: 'boolean',
  },
};
