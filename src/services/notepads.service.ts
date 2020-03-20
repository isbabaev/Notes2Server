import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notepad } from 'src/entities/notepad.entity';
import { Repository } from 'typeorm';
import { INotepads } from 'src/interfaces/notepads.interface';
import IAddParams = INotepads.IAddParams;
import IGetAllResponse = INotepads.IGetAllResponse;

@Injectable()
export class NotepadsService {
    constructor(
        @InjectRepository(Notepad)
        private readonly notepadRepository: Repository<Notepad>
    ) {
    }

    async add(params: IAddParams): Promise<any> {
        return await this.notepadRepository.insert(params);
    }

    async getAll(): Promise<IGetAllResponse[]> {
        return await this.notepadRepository.find();
    }
}
