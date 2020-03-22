export namespace INotepad {
    export interface IAddParams {
        name: string;
        user_id: number;
        created: string;
    }

    export interface IAddResponse {
        id: number;
    }

    export interface IGetByUserIdParams {
        user_id: number;
    }

    export interface IModel {
        id: number;
        name: string;
        user_id: number;
        created: string;
    }
}