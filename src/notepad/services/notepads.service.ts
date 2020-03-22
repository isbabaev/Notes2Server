import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notepad } from 'src/entities/notepad.entity';
import { Repository } from 'typeorm';
import { INotepad } from 'src/notepad/interfaces/notepad.interface';
import IAddParams = INotepad.IAddParams;
import IAddResponse = INotepad.IAddResponse;
import IModel = INotepad.IModel;
import IGetByUserIdParams = INotepad.IGetByUserIdParams;

@Injectable()
export class NotepadsService {
    constructor(
        @InjectRepository(Notepad)
        private readonly notepadRepository: Repository<Notepad>
    ) {
    }

    async add(params: IAddParams): Promise<IAddResponse> {
        return await this.notepadRepository.insert(params).then(res => res.raw[0]);
    }

    async getByUserId(params: IGetByUserIdParams): Promise<IModel[]> {
        return await this.notepadRepository.find({
            where: { user_id: params.user_id },
            order: { created: 'DESC' }
        });
    }
}
