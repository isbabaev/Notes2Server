import { Controller, Post, Body } from "@nestjs/common";
import { UsersDto } from "src/dto/users.dto";
import { UsersService } from "src/services/users.service";
import Add = UsersDto.Add;

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Post('add')
    async add(@Body() params: Add): Promise<any> {
        return await this.userService.add(params);
    }
}