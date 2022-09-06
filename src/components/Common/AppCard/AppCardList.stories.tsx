import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AppCardList } from './AppCardList';

export default {
  title: 'Common/AppCardList',
  component: AppCardList,
} as ComponentMeta<typeof AppCardList>;

const Template: ComponentStory<typeof AppCardList> = () => <AppCardList />;

export const Default = Template.bind({});
