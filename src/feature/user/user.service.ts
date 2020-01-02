import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.interface'
import { Model } from 'mongoose';
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  // 构造函数
  constructor(
    // 注入model
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  // 创建用户
  async create(createUserDto: UserDto): Promise<User> {
    const user = new this.userModel(createUserDto)
    return await user.save()
  }

  // 获取用户详情
  async detail(userId: string): Promise<User> {
    return await this.userModel.findById(userId)
  }

  // 更新用户信息
  async update(userId: string, updateUserDto: UserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userId, updateUserDto)
  }
}
