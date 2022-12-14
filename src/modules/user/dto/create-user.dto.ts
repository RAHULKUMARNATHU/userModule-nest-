import { IsDate, IsEnum, IsString } from 'class-validator';
import { gender } from '../entities/user.entity';
export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  userName: string;

  @IsEnum({
    type: gender,
  })
  gender: gender;

  @IsDate()
  dob: string;
}
