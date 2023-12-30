import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { message: 'This is a login user' };
  }
  signup() {
    return { message: 'This is a new user' };
  }
}
