import { rest } from 'msw';
import { session } from './resolvers/Auth/session';
import { dummy } from './resolvers/dummy';

export const handlers = [
  rest.get('/api/auth/session', session(true)),
  rest.post('/api/auth/signIn', dummy),
  rest.post('/api/auth/signOut', dummy),
  rest.get('/api/auth/csrf', dummy),
  rest.post('/api/auth/_log', dummy),
];
