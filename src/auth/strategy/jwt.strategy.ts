import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // リクエストヘッダーからJWTを取得する
      ignoreExpiration: false, // JWTの有効期限を確認するかどうか
      secretOrKey: config.get<string>('JWT_SECRET'), // JWTの署名検証に使用する秘密鍵または公開鍵
    });
  }

  // JWTのペイロードを検証し、リクエストのユーザー情報を提供する
  async validate(payload: { sub: number; email: string }) {
    // ここでユーザー情報を検証し、リクエストのユーザー情報を返す
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });
    delete user.hash;
    if (!user) {
      throw new Error('ユーザーが見つかりませんでした');
    }

    return user;
  }
}
//JwtStrategy: これはPassport.jsの認証ストラテジーの一つで、JWT（JSON Web Tokens）を使用した認証を行います。
//このストラテジーは、受信したJWTが有効であることを確認し、そのペイロード（通常はユーザー情報）をリクエストオブジェクトに添付します。
//JwtStrategyは、具体的にはJWTの署名の検証と、署名が有効であればペイロードの解析を行います。
