import { IsDate, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  userName: string;

  @IsString()
  gender: string;

  @IsDate()
  dob: string;
}
