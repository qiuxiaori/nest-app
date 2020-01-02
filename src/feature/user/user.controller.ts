import { Controller, Get, Post, Param, Body, Put, Inject } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto'

@ApiTags('用户模块')
@Controller('users')
export class UserController {
  constructor(
    @Inject(UserService) private readonly userService: UserService
  ) { }

  @Post()
  @ApiOperation({ summary: '创建新用户' })
  async create(@Body() createUserDto: UserDto): Promise<UserDto> {
    return await this.userService.create(createUserDto)
  }

  // user/:id
  @Get(':_id')
  @ApiOperation({ summary: '获取用户详情' })
  async detail(@Param('_id') userId: string): Promise<UserDto> {
    return await this.userService.detail(userId)
  }

  @Put(':_id')
  @ApiOperation({ summary: '更改用户信息' })
  async update(@Param('_id') userId: string, @Body() updateUserDto: UserDto): Promise<UserDto> {
    return await this.userService.update(userId, updateUserDto)
  }
}
