import { IsString, IsEmail, IsInt } from 'class-validator';
import { IUser } from 'src/user/interfaces/user.interface';
import IAddParams = IUser.IAddParams;
import IGetByEmailParams = IUser.IGetByEmailParams;
import IGetByIdParams = IUser.IGetByIdParams;
import IChangePasswordParams = IUser.IChangePasswordParams;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UsersDto {
    import IChangePasswordParams = IUser.IChangePasswordParams;

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

    export class GetById implements IGetByIdParams {
        @IsInt()
        id: number;
    }

    export class ChangePassword implements  IChangePasswordParams {
        @IsInt()
        id: number;

        @IsString()
        old_password: string;

        @IsString()
        new_password: string;
    }
}
