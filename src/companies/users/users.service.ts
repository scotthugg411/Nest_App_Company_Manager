import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  usersList = [
    { userId: 1, name: 'Mark' },
    { userId: 2, name: 'John' },
    { userId: 3, name: 'Jane' },
    { userId: 4, name: 'Scott' },
    { userId: 5, name: 'Mike' },
  ];
  create(createUserDto: CreateUserDto) {
    this.usersList.push(createUserDto);
    return `added user ${createUserDto.name} successfully`;
  }

  findAll() {
    return this.usersList;
  }

  findOne(id: number) {
    return this.usersList.filter((e) => e.userId == userId);

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.usersList.find((e) => e.userId == userId);
    if (!user) {
      throw new Error('user not found');
    }
    user.name = updateuserDto.name;
    return `updated user ${userId} updated to ${user.name} successfully`;
  }

  remove(id: number) {
    const user = this.usersList.find((e) => e.userId == id);
    if (!user) {
      throw new Error('user not found');
    }
    const index = this.usersList.indexOf(user);
    this.usersList.splice(index, 1);
    return `removed user ${id} successfully`;
  }
}
