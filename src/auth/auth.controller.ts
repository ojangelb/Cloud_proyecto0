import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from '../user/user.entity';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('create-user')
  @UseInterceptors(FilesInterceptor(null))
  createUser(@Body() authCredentials: AuthCredentialsDto): Promise<User> {
    return this.authService.signUp(authCredentials);
  }

  @Post('api-auth')
  @UseInterceptors(FilesInterceptor(null))
  signIn(
    @Body() authCredentials: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentials);
  }
}
