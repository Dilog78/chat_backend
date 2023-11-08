import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { IUserResponse } from './types/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
    ) { }

    private generateUid(): number {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async login(username: string): Promise<IUserResponse> {

        const uid = this.generateUid();
        return this.userModel.create({ username, uid })
    }
}