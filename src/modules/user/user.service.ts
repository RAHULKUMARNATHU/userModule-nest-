import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userName = await this.findOne(createUserDto.userName);

    if (userName) {
      throw new BadRequestException('ohh ho User already Exist! Use Other One');
    }
    const users = this.repo.create(createUserDto);
    return this.repo.save(users);
  }

  findAll(userName: string): Promise<User[]> {
    // return `This action returns all user`;
    return this.repo.findBy({ userName });
  }

  findOne(userName: string): Promise<User> {
    if (!userName) {
      return null;
    }
    return this.repo.findOneBy({ userName });
    // return `This action returns a #${id} user`;
  }

  async update(userName: string, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${userName} user`;
    const user = await this.findOne(userName);

    if (!user) {
      throw new NotFoundException('ohh ho User Not Exist! Use Another User');
    }
    Object.assign(user , updateUserDto);
    return this.repo.save(user);
  }

  async remove(userName: string) {
    // return `This action removes a #${id} user`;
    const user = await this.findOne(userName);

    if (!user) {
      throw new NotFoundException('ohh ho User Not Exist! Use Another User');
    }
    
    console.log(`Deleted Username ${userName}`);
    
    return this.repo.remove(user);
  }
}
