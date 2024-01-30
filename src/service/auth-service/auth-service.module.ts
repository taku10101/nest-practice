import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { UserRepository } from 'src/repository/user.repository';

@Module({
  imports: [],
  providers: [AuthServiceService, UserRepository],
})
export class AuthServiceModule {}
