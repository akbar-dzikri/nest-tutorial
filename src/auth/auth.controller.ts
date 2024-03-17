import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signUpDto: AuthDto) {
    return this.authService.signUp(signUpDto);
  }
  @Post('signin')
  signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto);
  }
}
