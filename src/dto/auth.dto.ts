import { IAuth } from '../interfaces/auth.interface';
import ISignInParams = IAuth.ISignInParams;
import { IsEmail, IsString } from 'class-validator';

export namespace AuthDto {
    export class SignIn implements ISignInParams {
        @IsEmail()
        email: string;

        @IsString()
        password: string;
    }
}