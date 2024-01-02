import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  signUp(@Body('email') email: string, @Body('password') password: string) {
    console.log(email, password);
    return this.auth.signup();
  }

  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    console.log(email, password);
    return this.auth.login();
  }
}
