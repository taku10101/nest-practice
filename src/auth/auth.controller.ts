import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  signUp(@Body() dot: AuthDto) {
    console.log(dot.password, dot.email);
    return this.auth.signup();
  }

  @Post('login')
  login() {
    return this.auth.login();
  }
}
