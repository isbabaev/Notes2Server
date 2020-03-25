export namespace INote {
    export interface IAddParams {
        name: string;
        notepad_id: number;
        created: string;
    }

    export interface IAddResponse {
        id: number;
    }
}