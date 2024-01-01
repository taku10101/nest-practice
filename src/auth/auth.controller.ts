import { Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService) {}

  // auth/signup
  @Post('signup')
  signUp() {
    return 'signup';
  }
  // auth/login
  @Post('login')
  login() {
    return 'login';
  }
}
// Path: src/auth/auth.service.ts
