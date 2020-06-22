export namespace IAuth {
    export interface ISignInParams {
        email: string;
        password: string;
    }

    export interface ISignInResponse {
        access_token: string;
        user_id: number;
    }
}