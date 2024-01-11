import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//、HTTPリクエストオブジェクトからuserプロパティを取得するためのカスタムデコレーター
//このデコレーターを使用すると、リクエストハンドラーの引数としてuserを受け取ることができます。

//ExecutionContext から、HTTPリクエストオブジェクトを取得することができます。
export const GetUser = createParamDecorator(
  (data: string | null, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    //dataが指定されている場合は、リクエストユーザーのプロパティを返す
    if (data) {
      return req.user[data];
    }
    return req.user;
  },
);

//switchToHttp
// 現在の実行コンテキストをHTTPコンテキストに切り替えます。NestJSは、HTTPリクエストだけでなく
// WebSocketやMicroserviceといった他の種類のリクエストも扱うことができます。
// switchToHttp()メソッドを使用すると、現在の実行コンテキストが何であれ、それをHTTPリクエストとして扱うことができます。

//getRequest
//このオブジェクトには、リクエストヘッダー、クエリパラメーター、ボディなど、HTTPリクエストに関するすべての情報が含まれています。
