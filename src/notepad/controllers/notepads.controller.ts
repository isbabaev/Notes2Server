import { Controller, Post, Body, Get } from "@nestjs/common";
import { NotepadsService } from "../services/notepads.service";
import { NotepadsDto } from "src/notepad/dto/notepads.dto";
import Add = NotepadsDto.Add;
import GetByUserId = NotepadsDto.GetByUserId;
import { INotepad } from '../interfaces/notepad.interface';
import IModel = INotepad.IModel;


@Controller('notepads')
export class NotepadsController {
    constructor(private notepadService: NotepadsService) {
    }

    @Post('add')
    async add(@Body() params: Add): Promise<any> {
        return await this.notepadService.add(params);
    }

    @Post('get-by-user-id')
    async getByUserId(@Body() params: GetByUserId): Promise<IModel[]> {
        return await this.notepadService.getByUserId(params);
    }
}