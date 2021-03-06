import { Controller, Post, Body } from "@nestjs/common";
import { NotepadsService } from "../services/notepads.service";
import { NotepadsDto } from "src/dto/notepads.dto";
import Add = NotepadsDto.Add;
import GetByUserId = NotepadsDto.GetByUserId;
import Update = NotepadsDto.Update;
import Delete = NotepadsDto.Delete;
import GetById = NotepadsDto.GetById;
import { INotepad } from '../interfaces/notepad.interface';
import IModel = INotepad.IModel;


@Controller('notepads')
export class NotepadsController {
    constructor(private notepadService: NotepadsService) {
    }

    @Post('add')
    add(@Body() params: Add): Promise<any> {
        return this.notepadService.add(params);
    }

    @Post('get-by-user-id')
    getByUserId(@Body() params: GetByUserId): Promise<IModel[]> {
        return this.notepadService.getByUserId(params);
    }

    @Post('get-by-id')
    getById(@Body() params: GetById): Promise<IModel> {
        return this.notepadService.getById(params);
    }

    @Post('update')
    update(@Body() params: Update): Promise<any> {
        return this.notepadService.update(params);
    }

    @Post('delete')
    delete(@Body() params: Delete): Promise<any> {
        return this.notepadService.delete(params);
    }
}
