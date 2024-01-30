import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserDto) {
    return await this.userRepository.createUser(data);
  }
  async findAllUser() {
    return await this.userRepository.findAll();
  }
  async findByUserID(id: number) {
    return await this.userRepository.findByUserID(id);
  }
  async findByUserEmail(email: string) {
    return await this.userRepository.findByUserEmail(email);
  }
  async updateUser(user_id: number, data: UpdateUserDto) {
    return await this.userRepository.updateUser(user_id, data);
  }
  async deleteUser(user_id: number) {
    return await this.userRepository.deleteUser(user_id);
  }
}
