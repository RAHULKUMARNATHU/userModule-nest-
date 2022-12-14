// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {



// }





import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {  IsString, IsOptional , IsEnum, IsDate} from "class-validator";
import { gender } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;
 
    @IsEnum({})
    @IsOptional()
    gender?: gender;

    @IsString()
    @IsOptional()
    dob?: Date;



}