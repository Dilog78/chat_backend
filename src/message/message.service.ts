import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { IMsg } from './types/message';

@Injectable()
export class MessageService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ){}

    async saveMessage(data: IMsg): Promise<boolean> {
        const msg = await this.messageModel.create({message: data.message, user: data.userid})
        .then( msg => {
            return this.userModel.updateOne({_id: data.userid}, {$push: {messages: msg._id}})
        })
        .catch(() => false)
        if (!msg) return false;
        return true;
    }
}
