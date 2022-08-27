// テストを何かしら書いたら消す
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Sample } from './Sample';

export default {
  title: 'Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = () => <Sample />;

export const Default = Template.bind({});
