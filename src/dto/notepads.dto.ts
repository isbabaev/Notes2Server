import { INotepad } from "src/interfaces/notepad.interface";
import { IsString, IsInt } from 'class-validator';
import IAddParams = INotepad.IAddParams;
import IGetByUserIdParams = INotepad.IGetByUserIdParams;
import IUpdateParams = INotepad.IUpdateParams;
import IDeleteParams = INotepad.IDeleteParams;
import IGetById = INotepad.IGetById;


// eslint-disable-next-line @typescript-eslint/no-namespace
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

    export class GetById implements IGetById {
        @IsInt()
        id: number;
    }

    export class Update implements IUpdateParams {
        @IsInt()
        id: number;

        @IsString()
        name: string;
    }

    export class Delete implements IDeleteParams {
        @IsInt()
        id: number;
    }
}
