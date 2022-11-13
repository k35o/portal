import { rest } from 'msw';
import { session } from './resolvers/Auth/session';

export const handlers = [rest.get('/api/auth/session', session)];
