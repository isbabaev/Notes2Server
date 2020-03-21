import { AuthController } from "src/auth/controllers/auth.controller";
import { Module } from "@nestjs/common";
import { UserModule } from "src/user/modules/user.module";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants/jwt-constants';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '30d' }
        }),
    ],
    controllers: [AuthController]
})
export class AuthModule {

}