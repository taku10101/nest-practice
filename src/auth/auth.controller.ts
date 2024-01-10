import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.auth.signup(dto);
  }

  @Post('login')
  login(
    @Body()
    dto: AuthDto,
  ) {
    return this.auth.login(dto);
  }
}
