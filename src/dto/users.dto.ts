import { IsNotEmpty, IsString, IsNumber, IsEmail } from 'class-validator';
import { IUsers } from 'src/interfaces/users.interface';
import IAddParams = IUsers.IAddParams;

export namespace UsersDto {
    export class Add implements IAddParams {
        @IsString()
        @IsEmail()
        email: string;

        @IsString()
        password: string;

        @IsString()
        created: string;
    }
}