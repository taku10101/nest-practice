import { Injectable } from '@nestjs/common';
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

  login() {
    return { message: 'This is a login user' };
  }
}
