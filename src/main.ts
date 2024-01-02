import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //validationのパイプをグローバルに設定
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //不要なパラメータを弾く
    }),
  );
  await app.listen(3333);
}
bootstrap();
