import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { GetUser } from 'src/auth/decorator';
import { Users } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('add/user')
  async addUser(@GetUser() user: Users, @Body() newUser: Users) {
    return this.adminService.addUser(user, newUser);
  }
}
