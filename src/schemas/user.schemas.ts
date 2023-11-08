import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: false })
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true })
    uid: number
}

export const UserSchema = SchemaFactory.createForClass(User);