import { IsEmail, IsNumberString, IsOptional, IsString } from 'class-validator';

export class UsersDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumberString()
  @IsOptional()
  generasi: string | number;

  @IsString()
  @IsOptional()
  image: string;
}
