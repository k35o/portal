import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AppCard } from './AppCard';

export default {
  title: 'Common/AppCard',
  component: AppCard,
} as ComponentMeta<typeof AppCard>;

const Template: ComponentStory<typeof AppCard> = (args) => (
  <AppCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  emotion: '✏️',
  title: 'my blog',
  description: '開発者が記述しているブログです。',
  link: '/blog',
};
