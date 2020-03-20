import {IsNotEmpty, IsString, IsNumber, IsEmail} from 'class-validator';
import { IUser } from 'src/interfaces/user.interface';

export namespace UserDto {
    export class Add implements IUser.IAddParams {
        @IsString() 
        @IsEmail()
        email: string;

        @IsString() 
        password: string;

        @IsString()
        created: string;
    }
}