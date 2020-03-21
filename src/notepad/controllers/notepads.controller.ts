import { Controller, Post, Body, Get } from "@nestjs/common";
import { NotepadsDto } from "src/notepad/dto/notepads.dto";
import Add = NotepadsDto.Add;
import { NotepadsService } from "../services/notepads.service";

@Controller('notepads')
export class NotepadsController {
    constructor(private notepadService: NotepadsService) {
    }

    @Post('add')
    async add(@Body() params: Add): Promise<any> {
        return await this.notepadService.add(params);
    }
}