import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { IError } from './types/error.interface';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('login')
    async login(
        @Body() body: LoginDto,
        @Res({ passthrough: true }) res: Response
    ): Promise<HttpStatus | IError> {
        try {
            const { username } = body
            const user = await this.userService.login(username);
            res.cookie('user', user, { httpOnly: true, secure: true })
            return HttpStatus.OK;
        } catch (err) {
            res.status(400)
            return { error: true, message: err.message }
        }
    }
}