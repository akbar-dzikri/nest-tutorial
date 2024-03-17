import { ForbiddenException, Injectable } from '@nestjs/common';
import {ConfigService } from '@nestjs/config';
import { Users } from '@prisma/client';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {}

  async addUser(admin: Users, newUser: Users) {
    if (admin.role !== 'Admin') {
      throw new ForbiddenException('You are not an Admin');
    }
    const hash =
      (await newUser.hash) ??
      (await argon.hash(this.config.get('PASSWORD_DEFAULT')));
    const user = await this.prisma.users.create({
      data: {
        email: newUser.email,
        hash,
        role: newUser.role,
        name: newUser.name,
        generasi: newUser.generasi,
      },
    });
  }
}
