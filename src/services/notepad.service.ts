import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notepad } from 'src/entities/notepad.entity';
import { Repository } from 'typeorm';
import { INotepad } from 'src/interfaces/notepad.interface';

@Injectable()
export class NotepadService {
    constructor(
        @InjectRepository(Notepad)
        private readonly notepadRepository: Repository<Notepad>
    ) {
    }

    async add(params: INotepad.IAddParams): Promise<INotepad.IAddResponse> {
        return await this.notepadRepository
            .insert(params)
            .then(rows => rows[0])
            .catch(error => {
                throw new Error(error);
            })
    }

}
