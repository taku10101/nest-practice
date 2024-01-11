import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // リクエストヘッダーからJWTを取得する
      ignoreExpiration: false, // JWTの有効期限を確認するかどうか
      secretOrKey: config.get<string>('JWT_SECRET'), // JWTの署名検証に使用する秘密鍵または公開鍵
    });
  }

  // JWTのペイロードを検証し、リクエストのユーザー情報を提供する
  async validate(payload: any) {
    // ここでユーザー情報を検証し、リクエストのユーザー情報を返す
    // 例えば、以下のようにペイロードからユーザーIDを返すことができます：
    return payload;
  }
}
