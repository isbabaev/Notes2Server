// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IUser {
    export interface IAddParams {
        email: string;
        password: string;
        created: string;
    }

    export interface IGetByEmailParams {
        email: string;
    }

    export interface IModel {
        id: number;
        email: string;
        password: string;
        created: string;
    }

    export interface IGetByEmailAndPasswordParams {
        email: string;
        password: string;
    }

    export interface IGetByIdParams {
        id: number;
    }

    export interface IChangePasswordParams {
        id: number;
        old_password: string;
        new_password: string;
    }
}
