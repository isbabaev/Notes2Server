import { INote } from "../interfaces/note.interface";
import IAddParams = INote.IAddParams;
import { IsString, IsInt } from "class-validator";
import IGetById = INote.IGetById;
import IGetByNotepadId = INote.IGetByNotepadId;
import IUpdateParams = INote.IUpdateParams;
import IDeleteParams = INote.IDeleteParams;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NoteDto {
    export class Add implements IAddParams {
        @IsString()
        name: string;

        @IsInt()
        notepad_id: number;

        @IsString()
        created: string;
    }

    export class GetById implements IGetById {
        @IsInt()
        id: number;
    }

    export class GetByNotepadId implements IGetByNotepadId {
        @IsInt()
        id: number;
    }

    export class Update implements IUpdateParams {
        @IsInt()
        id: number;

        @IsString()
        name: string;

        @IsString()
        content: string;
    }

    export class Delete implements IDeleteParams {
        @IsInt()
        id: number;
    }
}