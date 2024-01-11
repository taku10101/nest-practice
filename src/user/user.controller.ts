import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    console.log(req.user);

    return req.user;
  }
}
