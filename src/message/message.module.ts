import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './schemas/message.schema';
import { MessageService } from './message.service';
import { User, UserSchema } from 'src/user/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Message.name, schema: MessageSchema }, 
            {name: User.name, schema: UserSchema}
        ]),
    ],
    providers: [MessageService],
    controllers: [],
    exports: [MessageService]
})
export class MessageModule { }