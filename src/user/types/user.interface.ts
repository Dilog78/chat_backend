import { Types } from "mongoose";

export interface IUserResponse {
    _id: Types.ObjectId;
    username: string;
    uid: number;
}