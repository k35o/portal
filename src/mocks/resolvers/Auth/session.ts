import { MockedRequest, ResponseResolver, restContext } from 'msw';

export const session: ResponseResolver<MockedRequest, typeof restContext> = (
  _,
  res,
  ctx,
) => {
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
};
