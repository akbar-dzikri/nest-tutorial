import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Users } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UsersService } from './users.service';
import { UsersDto } from './dto';

@UseGuards(JwtGuard)
@Controller('profile')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getMe(@GetUser() users: Users) {
    return users;
  }

  @Patch('edit')
  async editUser(@GetUser() user: Users, @Body() newUser: UsersDto) {
    return this.usersService.editUser(user, newUser);
  }

  @Delete('delete')
  deleteUser(@GetUser() user: Users) {
    return this.usersService.deleteUser(user);
  }
}
