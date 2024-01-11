import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//、HTTPリクエストオブジェクトからuserプロパティを取得するためのカスタムデコレーター
//このデコレーターを使用すると、リクエストハンドラーの引数としてuserを受け取ることができます。

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
