export namespace INotepads {
    export interface IAddParams {
        name: string;
        created: string;
    }

    export interface IGetAllResponse {
        id: number;
        name: string;
        created: string;
    }
}