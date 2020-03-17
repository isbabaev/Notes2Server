export namespace INotepad {
    export interface IAddParams {
        name: string;
        created: string;
    }

    export interface IAddResponse {
        id: number
        name: string;
        created: string;
    }
}