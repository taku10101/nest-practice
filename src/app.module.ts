import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserServiceModule } from './service/user-service/user-service.module';
import { AuthServiceModule } from './service/auth-service/auth-service.module';
import { AuthControllerModule } from './controller/auth-controller/auth-controller.module';
import { UserControllerModule } from './controller/user-controller/user-controller.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    UserServiceModule,
    AuthServiceModule,
    AuthControllerModule,
    UserControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
