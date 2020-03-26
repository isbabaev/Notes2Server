import { Controller, Body, Post } from "@nestjs/common";
import { NoteService } from "../services/note.service";
import { NoteDto } from '../dto/note.dto';
import Add = NoteDto.Add;
import GetById = NoteDto.GetById;
import GetByNotepadId = NoteDto.GetByNotepadId;
import { INote } from '../interfaces/note.interface';
import IAddResponse = INote.IAddResponse;
import IModel = INote.IModel;

@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService) {
    }

    @Post('add')
    add(@Body() params: Add): Promise<IAddResponse> {
       return this.noteService.add(params);
    }

    @Post('get-by-id')
    getById(@Body() params: GetById): Promise<IModel> {
        return this.noteService.getById(params);
    }

    @Post('get-by-notepad-id')
    getByNotepadId(@Body() params: GetByNotepadId): Promise<IModel[]> {
        return this.noteService.getByNotepadId(params);
    }
}