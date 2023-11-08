import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { UsersModule } from './user/user.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.DB_CONNECT)],
  controllers: [],
  providers: [],
})
export class AppModule { }
