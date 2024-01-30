import { Module } from '@nestjs/common';
import { UserServiceService } from './user-service.service';

@Module({
  providers: [UserServiceService],
})
export class UserServiceModule {
  constructor(private userService: UserServiceService) {}
}
