// eslint-disable-next-line @typescript-eslint/no-namespace
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
    
    export interface IUpdateParams {
        id: number;
        name: string;
    }

    export interface IDeleteParams {
        id: number;
    }

    export interface IGetById {
        id: number;
    }
}