import { AuthController } from "src/auth/controllers/auth.controller";
import { Module } from "@nestjs/common";

@Module({
    controllers: [AuthController]
})
export class AuthModule {

}