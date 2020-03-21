export namespace IUsers {
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
}