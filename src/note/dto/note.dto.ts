import { INote } from "../interfaces/note.interface";
import IAddParams = INote.IAddParams;
import { IsString, IsInt } from "class-validator";

export namespace NoteDto {
    export class Add implements IAddParams {
        @IsString()
        name: string;

        @IsInt()
        notepad_id: number;

        @IsString()
        created: string;
    }
}