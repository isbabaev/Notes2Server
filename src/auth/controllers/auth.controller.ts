import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from "src/user/services/users.service";
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';
import SignIn = AuthDto.SignIn;
import { IAuth } from '../interfaces/auth.interface';
import ISignInResponse = IAuth.ISignInResponse;

@Controller('auth')
export class AuthController {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) {
    }

    @Post('sign-in')
    async signIn(@Body() params: SignIn): Promise<ISignInResponse> {
        const user = await this.usersService.getByEmailAndPassword(params);

        if (!user) {
            throw new Error('Неверный логин или пароль!');
        }

        const payload = { username: user.email, sub: user.id };
        const access_token = this.jwtService.sign(payload);

        return { access_token };
    }
}