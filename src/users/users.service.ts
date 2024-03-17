import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async editUser(requestUser: Users, newUser: UsersDto) {
    const user = await this.prisma.users.update({
      where: {
        id: requestUser.id,
      },
      data: {
        email: newUser.email,
        name: newUser.name,
        generasi: this.stringToInt(newUser.generasi),
      },
    });

    delete user.hash;
    return user;
  }

  stringToInt(data: string | number): number {
    const result = typeof data === 'string' ? parseInt(data) : data;
    return result;
  }

  async deleteUser(user: Users) {
    const deletedUser = await this.prisma.users.delete({
      where: {
        id: user.id,
      },
    });

    return (
      'Account ' + deletedUser.name ??
      deletedUser.email + ' deleted successfully '
    );
  }
}
