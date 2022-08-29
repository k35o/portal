import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AppCard } from './AppCard';

export default {
  title: 'AppCard',
  component: AppCard,
} as ComponentMeta<typeof AppCard>;

const Template: ComponentStory<typeof AppCard> = () => <AppCard />;

export const Default = Template.bind({});
