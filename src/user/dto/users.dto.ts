import { IsNotEmpty, IsString, IsNumber, IsEmail } from 'class-validator';
import { IUsers } from 'src/user/interfaces/users.interface';
import IAddParams = IUsers.IAddParams;
import IGetByEmailParams = IUsers.IGetByEmailParams;

export namespace UsersDto {
    export class Add implements IAddParams {
        @IsEmail()
        email: string;

        @IsString()
        password: string;

        @IsString()
        created: string;
    }

    export class GetByEmail implements IGetByEmailParams {
        @IsEmail()
        email: string;
    }
}