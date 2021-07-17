import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Breadcrumb } from '../Breadcrumb';
import { AnchorButton } from '../../Button';

export default {
  title: 'Components/Breadcrumbs/Breadcrumb',
  component: Breadcrumb,
} as Meta;

export const Default: Story = () => {
  return (
    <Breadcrumb>
      <AnchorButton href="/">Home</AnchorButton>
      <AnchorButton href="/">React</AnchorButton>
      <AnchorButton href="/">Angular</AnchorButton>
      <AnchorButton href="/">Vue</AnchorButton>
      <AnchorButton href="/">React Components</AnchorButton>
      <AnchorButton href="/">Angular Components</AnchorButton>
      <AnchorButton href="/">Vue Components</AnchorButton>
      <AnchorButton>Current Page</AnchorButton>
    </Breadcrumb>
  );
};

Default.parameters = {
  docs: {
    description: {
      component: `
  The Breadcrumb component follows the [W3C breadcrumb accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)
  and applies the correct accessibility attributes to the \`Breadcrumb\`
  listed below. It acts as a high-abstraction API over the [useBreadcrumb()](https://www.npmjs.com/package/@zendeskgarden/container-breadcrumb)
  hook. Implementations are expected to override aria-label with a
  translated value describing usage.
`,
    },
  },
};
