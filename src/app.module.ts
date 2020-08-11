import { Module } from '@nestjs/common';
import { UsersModule } from './my-users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { typeOrmConfig } from './database/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule
  ],
  
})
export class AppModule {}
