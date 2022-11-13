import { session } from '@/mocks/resolvers/Auth/session';
import { worker } from '@/mocks/worker';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';
import React, { useEffect } from 'react';
import { Header } from './Header';

export default {
  title: 'Common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

const ErrorTemplate: ComponentStory<typeof Header> = () => {
  useEffect(() => {
    worker.use(...[rest.get('/api/auth/session', session(false))]);
    return () => {
      worker.resetHandlers();
    };
  });
  return <Header />;
};
export const Error = ErrorTemplate.bind({});
