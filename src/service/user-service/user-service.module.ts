import { Module } from '@nestjs/common';
import { UserService } from './user-service.service';
import { UserRepository } from 'src/repository/user.repository';

@Module({
  imports: [],
  providers: [UserService, UserRepository],
})
export class UserServiceModule {}
