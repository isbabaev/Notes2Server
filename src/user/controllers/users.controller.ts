import { Controller, Post, Body } from "@nestjs/common";
import { UsersDto } from "src/user/dto/users.dto";
import { UsersService } from "src/user/services/users.service";
import Add = UsersDto.Add;
import GetByEmail = UsersDto.GetByEmail;
import GetById = UsersDto.GetById;
import ChangePassword = UsersDto.ChangePassword;
import { IUser } from 'src/user/interfaces/user.interface';
import IModel = IUser.IModel;

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Post('add')
    async add(@Body() params: any): Promise<any> {
        return await this.userService.add(params);
    }

    @Post('get-by-email')
    async getByEmail(@Body() params: GetByEmail): Promise<IModel> {
        return await this.userService.getByEmail(params);
    }

    @Post('get-by-id')
    async getById(@Body() params: GetById): Promise<IModel> {
        return await this.userService.getById(params);
    }

    @Post('change-password')
    async changePassword(@Body() params: ChangePassword): Promise<any> {
        return await this.userService.changePassword(params);
    }
}
