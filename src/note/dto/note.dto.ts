import { INote } from "../interfaces/note.interface";
import IAddParams = INote.IAddParams;
import { IsString, IsInt } from "class-validator";
import IGetById = INote.IGetById;

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
}