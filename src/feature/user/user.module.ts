import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DBModule } from '../../common/db/db.modules';
import { usersProviders } from './user.providers';

@Module({
  imports: [DBModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders]
})
export class UserModule {}
