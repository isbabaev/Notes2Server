import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { IUsers } from 'src/interfaces/users.interface';
import IAddParams = IUsers.IAddParams;
import IGetByEmailParams = IUsers.IGetByEmailParams;
import IModel = IUsers.IModel;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    async add(params: IAddParams): Promise<any> {
        const user = this.getByEmail({ email: params.email });

        if (user) {
            throw new Error('Пользователь с таким email уже существует');
        }

        return await this.userRepository.insert(params)
            .then(rows => rows[0]);
    }

    async getByEmail(params: IGetByEmailParams): Promise<IModel> {
        return await this.userRepository.findOne({ email: params.email });
    }
}
