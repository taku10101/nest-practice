import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.auth.signup(dto);
  }
  @HttpCode(200) // デフォルトは201(CREATED)なので、200(O
  @Post('login')
  login(@Body() dto: AuthDto) {
    return this.auth.login(dto);
  }
}
