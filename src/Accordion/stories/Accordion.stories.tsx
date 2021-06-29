import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion } from '../Accordion';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionLabel } from '../AccordionLabel';
import { AccordionPanel } from '../AccordionPanel';
import { AccordionSection } from '../AccordionSection';

export default {
  title: 'Components/Accordions/Accordion',
  subcomponent: {
    Accordion,
    AccordionSection,
    AccordionHeader,
    AccordionLabel,
    AccordionPanel,
  },
} as Meta;

interface IStoryProps {
  isAnimated: boolean;
  accordionType: 'basic' | 'borderless' | 'ghost';
}

export const Default: Story<IStoryProps> = ({ isAnimated, accordionType }) => {
  return (
    <Accordion level={3} isAnimated={isAnimated} accordionType={accordionType}>
      <AccordionSection>
        <AccordionHeader>
          <AccordionLabel>Section 1 Title</AccordionLabel>
        </AccordionHeader>
        <AccordionPanel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </AccordionPanel>
      </AccordionSection>
      <AccordionSection>
        <AccordionHeader>
          <AccordionLabel>Section 2 Title</AccordionLabel>
        </AccordionHeader>
        <AccordionPanel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </AccordionPanel>
      </AccordionSection>
      <AccordionSection>
        <AccordionHeader>
          <AccordionLabel>Section 3 Title</AccordionLabel>
        </AccordionHeader>
        <AccordionPanel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress.
        </AccordionPanel>
      </AccordionSection>
    </Accordion>
  );
};

Default.args = {
  isAnimated: true,
};

Default.argTypes = {
  isAnimated: {
    control: 'boolean',
  },
  accordionType: {
    control: { type: 'radio', options: ['basic', 'ghost', 'borderless'] },
  },
};
