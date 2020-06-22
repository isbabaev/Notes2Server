import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notepad } from 'src/entities/notepad.entity';
import { Repository } from 'typeorm';
import { INotepad } from 'src/interfaces/notepad.interface';
import IAddParams = INotepad.IAddParams;
import IAddResponse = INotepad.IAddResponse;
import IModel = INotepad.IModel;
import IGetByUserIdParams = INotepad.IGetByUserIdParams;
import IUpdateParams = INotepad.IUpdateParams;
import IDeleteParams = INotepad.IDeleteParams;
import IGetById = INotepad.IGetById;

@Injectable()
export class NotepadsService {
    constructor(
        @InjectRepository(Notepad)
        private readonly notepadRepository: Repository<Notepad>
    ) {
    }

    add(params: IAddParams): Promise<IAddResponse> {
        return this.notepadRepository.insert(params).then(res => res.raw[0]);
    }

    getByUserId(params: IGetByUserIdParams): Promise<IModel[]> {
        return this.notepadRepository.find({
            // eslint-disable-next-line @typescript-eslint/camelcase
            where: { user_id: params.user_id },
            order: { created: 'DESC' }
        });
    }

    getById(params: IGetById): Promise<IModel> {
        return this.notepadRepository.findOne({ id: params.id });
    }

    update(params: IUpdateParams): Promise<any> {
        return this.notepadRepository.update({
            id: params.id
        }, {
            name: params.name
        });
    }

    delete(params: IDeleteParams): Promise<any> {
        return this.notepadRepository.delete({ id: params.id });
    }
    
}
