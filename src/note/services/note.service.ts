import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Note } from "../../entities/note.entity";
import { Repository } from "typeorm";
import { INote } from "../interfaces/note.interface";
import IAddParams = INote.IAddParams;
import IAddResponse = INote.IAddResponse;

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private readonly noteRepository: Repository<Note>
    ) { }

    add(params: IAddParams): Promise<IAddResponse> {
        return this.noteRepository.insert(params).then(res => res.raw[0]);
    }
}