import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotepadModule } from './notepad/modules/notepad.module';
import { UserModule } from './user/modules/user.module';
import { AuthModule } from './auth/modules/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotepadModule,
    UserModule,
    AuthModule
  ]
})
export class AppModule { }
