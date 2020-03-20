import { Controller, Post, Body } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { UserService } from "src/services/user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post('add')
    async add(@Body() params: UserDto.Add): Promise<any> {
        return await this.userService.add(params);
    }
}