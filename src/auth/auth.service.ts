import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    //prismaで
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
      //特定のフィールドのみを取得する場合はselectを使用する
      // select: {
      //   id: true,
      //   email: true,
      //   hash: true,
      // },
    });

    delete user.hash;
    return user;
  }

  async login(dto: AuthDto) {
    const user = this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      //ForbiddenExceptionは401エラーを返す
      throw new ForbiddenException('ログインに失敗しました');
    }

    //argon2のverifyメソッドでパスワードの照合を行う
    const pwMatch = await argon.verify((await user).hash, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('ログインに失敗しました');
    }
    delete (await user).hash;
    return user;
  }
}
