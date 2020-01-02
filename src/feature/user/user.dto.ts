
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: '用户名',
    default: '张三',
  })
  readonly name: string

  @ApiProperty({
    description: '年龄',
    default: '18',
  })
  readonly age: string

  @ApiProperty({
    description: '用户手机号',
    default: '17760719711',
  })
  readonly phone: string
}