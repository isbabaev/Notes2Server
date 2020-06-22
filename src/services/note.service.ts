import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Note } from "../entities/note.entity";
import { Repository } from "typeorm";
import { INote } from "../interfaces/note.interface";
import IAddParams = INote.IAddParams;
import IAddResponse = INote.IAddResponse;
import IGetById = INote.IGetById;
import IModel = INote.IModel;
import IGetByNotepadId = INote.IGetByNotepadId;
import IUpdateParams = INote.IUpdateParams;
import IDeleteParams = INote.IDeleteParams;

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private readonly noteRepository: Repository<Note>
    ) { }

    add(params: IAddParams): Promise<IAddResponse> {
        return this.noteRepository.insert(params).then(res => res.raw[0]);
    }

    getById(params: IGetById): Promise<IModel> {
        return this.noteRepository.findOne({ id: params.id });
    }

    getByNotepadId(params: IGetByNotepadId): Promise<IModel[]> {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const res = this.noteRepository.find({
            where: { notepad_id: params.id },
            order: { created: 'ASC'}
        });

        return res;
    }

    update(params: IUpdateParams): Promise<any> {
        return this.noteRepository.update({
            id: params.id
        }, {
            name: params.name,
            content: params.content
        });
    }

    delete(params: IDeleteParams): Promise<any> {
        return this.noteRepository.delete({ id: params.id });
    }
}
