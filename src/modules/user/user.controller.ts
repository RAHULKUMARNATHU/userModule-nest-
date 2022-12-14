import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return user;
  }

  @Get()
  findAll(@Query('username') userName: string) {
    return this.userService.findAll(userName);
  }

  @Get('/:userName')
  async findUser(@Param('userName') userName: string) {
    const user = await this.userService.findOne(userName);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Patch(':userName')
  update(@Param('userName') userName: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(userName, updateUserDto);
  }

  @Delete(':userName')
  remove(@Param('userName') userName: string) {
    return this.userService.remove(userName);
  }
}
