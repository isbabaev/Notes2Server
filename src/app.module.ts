import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotepadModule } from './modules/notepad.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotepadModule,
    UserModule
  ],
})
export class AppModule { }
