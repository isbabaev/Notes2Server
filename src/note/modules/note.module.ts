import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from 'src/entities/note.entity';
import { NoteController } from '../controllers/note.controller';
import { NoteService } from '../services/note.service';

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    controllers: [NoteController],
    providers: [NoteService],
})
export class NoteModule {

}