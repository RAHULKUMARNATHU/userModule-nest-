import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(createUserDto: CreateUserDto):Promise<User>{
    const users = this.repo.create(createUserDto);

    return this.repo.save(users);
  }

  findAll(userName: string): Promise<User[]> {
    // return `This action returns all user`;
    return this.repo.findBy({ userName });
  }

  findOne(id: number): Promise<User> {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
