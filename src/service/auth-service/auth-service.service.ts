import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/dto/auth';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class AuthServiceService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(data: RegisterDto) {
    return await this.userRepository.createUser(data);
  }
  async login(data: LoginDto) {
    return await this.userRepository.findByUserEmail(data.email);
  }
}
