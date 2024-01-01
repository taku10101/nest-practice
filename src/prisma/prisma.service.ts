import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//DB接続ロジックを定義
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }
}
