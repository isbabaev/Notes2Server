import { Controller, Body, Post } from "@nestjs/common";
import { NoteService } from "../services/note.service";
import { NoteDto } from '../dto/note.dto';
import Add = NoteDto.Add;
import { INote } from '../interfaces/note.interface';
import IAddResponse = INote.IAddResponse;

@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService) {
    }

    @Post('add')
    add(@Body() params: Add): Promise<IAddResponse> {
       return this.noteService.add(params);
    }
}