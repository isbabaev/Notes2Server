import { INotepads } from "src/interfaces/notepads.interface";
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import IAddParams = INotepads.IAddParams;

export namespace NotepadsDto {
    export class Add implements IAddParams {
        @IsString()
        name: string;

        @IsString()
        created: string;
    }
}