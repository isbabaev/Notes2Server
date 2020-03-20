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

    async add(params: INotepad.IAddParams): Promise<any> {
        return await this.notepadRepository.insert(params);
    }

    async getAll(): Promise<INotepad.IGetAllResponse[]> {
        return await this.notepadRepository.find();
    }
}
