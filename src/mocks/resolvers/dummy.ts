import { MockedRequest, ResponseResolver, restContext } from 'msw';

export const dummy: ResponseResolver<MockedRequest, typeof restContext> = (
  _,
  res,
  ctx,
) => {
  return res(ctx.status(200), ctx.json({}));
};
