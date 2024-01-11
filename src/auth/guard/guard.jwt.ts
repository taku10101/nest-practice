import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
// AuthGuard: これはNestJSのGuardの一つで
//特定のルートまたはコントローラーへのアクセスを制御します。
//AuthGuardは、特定のPassport.jsのストラテジー（この場合はJwtStrategy）を使用して認証を行います。
//AuthGuardは、認証が成功した場合にはリクエストを次のハンドラーに渡し、失敗した場合にはエラーをスローします。
