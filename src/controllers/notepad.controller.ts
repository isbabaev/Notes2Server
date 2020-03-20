import { Controller, Post, Body, Get } from "@nestjs/common";
import { NotepadService } from "src/services/notepad.service";
import { NotepadDto } from "src/dto/notepad.dto";
import { INotepad } from "src/interfaces/notepad.interface";

@Controller('notepad')
export class NotepadController {
    constructor(private notepadService: NotepadService) {
    }

    @Post('add')
    async add(@Body() params: NotepadDto.Add): Promise<any> {
        return await this.notepadService.add(params);
    }
}