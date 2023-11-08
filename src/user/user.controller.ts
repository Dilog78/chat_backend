import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { IUserResponse } from './types/user.interface';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('login')
    async login(@Body() body: LoginDto): Promise<IUserResponse> {
        const { username } = body
        return this.userService.login(username);
    }
}