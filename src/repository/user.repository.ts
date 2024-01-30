import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return await this.prisma.user.create({ data });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findByUserID(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }
  async findByUserEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async updateUser(user_id: number, data: CreateUserDto) {
    return await this.prisma.user.update({
      where: {
        id: user_id,
      },
      data,
    });
  }
  async deleteUser(user_id: number) {
    return await this.prisma.user.delete({ where: { id: user_id } });
  }
}
