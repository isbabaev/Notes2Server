import { Controller, Post, Body, Get } from "@nestjs/common";
import { NotepadsService } from "src/services/notepads.service";
import { NotepadsDto } from "src/dto/notepads.dto";
import Add = NotepadsDto.Add;

@Controller('notepads')
export class NotepadsController {
    constructor(private notepadService: NotepadsService) {
    }

    @Post('add')
    async add(@Body() params: Add): Promise<any> {
        return await this.notepadService.add(params);
    }
}