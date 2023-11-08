import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }


    @Post('/registration')
    async registration(@Body() body: any) {
        const { username, email, password } = body;

        return this.userService.creatUser(username, email, password);
    }

    @Post('/login')
    async login(@Body() body: any) {
        const { email, password } = body;

        return this.userService.login(email, password);
    }
}