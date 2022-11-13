import { MockedRequest, ResponseResolver, restContext } from 'msw';

export const session =
  (
    isAuthenticated: boolean,
  ): ResponseResolver<MockedRequest, typeof restContext> =>
  (_, res, ctx) => {
    if (isAuthenticated) {
      return res(
        ctx.status(200),
        ctx.json({
          user: {
            name: '坂野航希',
            email: 'kosakanoki@gmail.com',
            image: '/image/avater.png',
          },
          expires: '',
        }),
      );
    }
    return res(ctx.status(200), ctx.json({}));
  };
