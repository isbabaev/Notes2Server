import { INotepad } from "src/interfaces/notepad.interface";
import {IsNotEmpty, IsString, IsNumber} from 'class-validator';

export namespace NotepadDto {
    export class Add implements INotepad.IAddParams {
        @IsString()
        name: string;

        @IsString()
        created: string;
    }
}