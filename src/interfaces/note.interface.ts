// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace INote {
    export interface IAddParams {
        name: string;
        notepad_id: number;
        created: string;
    }

    export interface IAddResponse {
        id: number;
    }

    export interface IGetById {
        id: number;
    }

    export interface IModel {
        id: number;
        name: string;
        notepad_id: number;
        created: string;
        content: string;
    }

    export interface IGetByNotepadId {
        id: number;
    }

    export interface IUpdateParams {
        id: number;
        name: string;
        content: string;
    }

    export interface IDeleteParams {
        id: number;
    }
}