import { IsNotEmpty, IsString, IsNumber, IsEmail } from 'class-validator';
import { IUser } from 'src/user/interfaces/user.interface';
import IAddParams = IUser.IAddParams;
import IGetByEmailParams = IUser.IGetByEmailParams;

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