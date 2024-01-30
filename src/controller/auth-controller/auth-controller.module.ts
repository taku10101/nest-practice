import { Module } from '@nestjs/common';
import { AuthControllerController } from './auth-controller.controller';

@Module({
  controllers: [AuthControllerController]
})
export class AuthControllerModule {}
