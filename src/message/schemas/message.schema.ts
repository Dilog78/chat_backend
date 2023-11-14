import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import mongoose, { HydratedDocument } from "mongoose";
import { Chat } from "src/chat/schemas/chat.schema";
import { User } from "src/user/schemas/user.schema";

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
    @Prop({ required: true })
    message: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "chat", required: false })
    @Type(() => Chat)
    chat: Chat

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "user", required: true })
    @Type(() => User)
    user: User
}

export const MessageSchema = SchemaFactory.createForClass(Message);