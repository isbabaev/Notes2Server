import { INotepad } from "src/notepad/interfaces/notepad.interface";
import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';
import IAddParams = INotepad.IAddParams;
import IGetByUserIdParams = INotepad.IGetByUserIdParams;


export namespace NotepadsDto {
    export class Add implements IAddParams {
        @IsString()
        name: string;

        @IsInt()
        user_id: number;

        @IsString()
        created: string;
    }

    export class GetByUserId implements IGetByUserIdParams {
        @IsInt()
        user_id: number;
    }
}