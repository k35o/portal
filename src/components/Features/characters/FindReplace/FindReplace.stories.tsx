import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FindReplace } from '.';

export default {
  title: 'Features/Characters/FindReplace',
  component: FindReplace,
} as ComponentMeta<typeof FindReplace>;

const Template: ComponentStory<typeof FindReplace> = () => <FindReplace />;

export const Default = Template.bind({});
