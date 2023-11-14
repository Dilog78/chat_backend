import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    UserModule,
    ChatModule,
    MessageModule,
    EventsModule,
    MongooseModule.forRoot(process.env.DB_CONNECT)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
