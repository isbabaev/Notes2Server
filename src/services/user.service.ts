import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { IUser } from 'src/interfaces/user.interface';
import IAddParams = IUser.IAddParams;
import IGetByEmailParams = IUser.IGetByEmailParams;
import IModel = IUser.IModel;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    async add(params: IAddParams): Promise<any> {
        const user = this.getByEmail({email: params.email});

        if(user) { 
            throw new Error('Пользователь с таким email уже существует');
        }
        
        return await this.userRepository.insert(params);
    }

    async getByEmail(params: IGetByEmailParams): Promise<IModel> {
        return await this.userRepository.findOne({email: params.email});
    }
}
