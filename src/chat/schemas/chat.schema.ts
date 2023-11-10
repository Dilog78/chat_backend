import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import mongoose, { HydratedDocument } from "mongoose";
import { Message } from "src/message/schemas/message.schema";
import { User } from "src/user/schemas/user.schema";

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: false })
export class Chat {
    @Prop({ required: true })
    chatid: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }])
    @Type(() => User)
    users: User[]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: "message", required: false }])
    @Type(() => Message)
    messages: Message[]
}

export const ChatSchema = SchemaFactory.createForClass(Chat);