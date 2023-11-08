import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    private readonly saltOrRounds = 10;

    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
    ) { }

    async creatUser(username, email, password): Promise<User> {

        const checkUser = await this.userModel.findOne({ email })
        if (checkUser) {
            throw new HttpException('email already exists', HttpStatus.UNPROCESSABLE_ENTITY);
        }

        const hachPass = await bcrypt.hash(password, this.saltOrRounds);

        const user = await this.userModel.create({ username, email, password: hachPass })
            .then(data => JSON.parse(JSON.stringify(data)));

        delete user.password
        return user;
    }

    async login(email, password): Promise<User> {
        const user = await this.userModel.findOne({ email })
            .then(data => JSON.parse(JSON.stringify(data)));

        if (!user) {
            throw new HttpException("Credentials are not valid", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            throw new HttpException("Credentials are not valid", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        delete user.password;
        return user;
    }

}