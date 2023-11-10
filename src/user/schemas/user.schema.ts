import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Chat } from "src/chat/schemas/chat.schema";
import { Type } from "class-transformer";
import { Message } from "src/message/schemas/message.schema";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: false })
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true })
    uid: number

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'chat', required: false }])
    @Type(() => Chat)
    chats?: Chat[]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'message', required: false }])
    @Type(() => Message)
    messages?: Message[]
}

export const UserSchema = SchemaFactory.createForClass(User);