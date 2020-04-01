import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { IUser } from 'src/user/interfaces/user.interface';
import IAddParams = IUser.IAddParams;
import IGetByEmailParams = IUser.IGetByEmailParams;
import IModel = IUser.IModel;
import IGetByEmailAndPasswordParams = IUser.IGetByEmailAndPasswordParams;
import IGetByIdParams = IUser.IGetByIdParams;
import IChangePasswordParams = IUser.IChangePasswordParams;

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

    async getById(params: IGetByIdParams): Promise<IModel> {
        return await this.userRepository.findOne({ id: params.id });
    }

    async changePassword(params: IChangePasswordParams): Promise<any> {
        const user = await this.getById({id: params.id});

        if(user.password === params.old_password) {
            user.password = params.new_password;

            await this.userRepository.update({id: params.id}, user);
        } else {
            throw new Error('Неверный пароль');
        }
    }
}
