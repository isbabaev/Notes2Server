import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotepadModule } from './modules/notepad.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotepadModule],
})
export class AppModule { }
