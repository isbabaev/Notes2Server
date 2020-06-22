import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotepadModule } from './modules/notepad.module';
import { UserModule } from './modules/user.module';
import { AuthModule } from './modules/auth.module';
import { NoteModule } from './modules/note.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotepadModule,
    UserModule,
    AuthModule,
    NoteModule
  ]
})
export class AppModule { }
