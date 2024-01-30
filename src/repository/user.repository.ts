import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: any) {
    return await this.prisma.user.findMany({
      where: {
        email: user.email,
      },
    });
  }
}
