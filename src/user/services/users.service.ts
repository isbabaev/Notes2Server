import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { IUsers } from 'src/user/interfaces/users.interface';
import IAddParams = IUsers.IAddParams;
import IGetByEmailParams = IUsers.IGetByEmailParams;
import IModel = IUsers.IModel;
import IGetByEmailAndPasswordParams = IUsers.IGetByEmailAndPasswordParams;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    async add(params: IAddParams): Promise<any> {
        const user = await this.getByEmail({ email: params.email }).then(user => user);

        if (user) {
            throw new Error('Пользователь с таким email уже существует');
        }

        return await this.userRepository.insert(params)
            .then(rows => rows[0]);
    }

    async getByEmail(params: IGetByEmailParams): Promise<IModel> {
        return await this.userRepository.findOne({ email: params.email });
    }

    async getByEmailAndPassword(params: IGetByEmailAndPasswordParams): Promise<IModel> {
        return await this.userRepository.findOne({
            email: params.email,
            password: params.password
        });
    }
}
