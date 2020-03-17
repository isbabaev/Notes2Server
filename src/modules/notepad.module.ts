import { NotepadController } from "src/controllers/notepad.controller";
import { Module } from '@nestjs/common';
import { NotepadService } from "src/services/notepad.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notepad } from "src/entities/notepad.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Notepad])],
    controllers: [NotepadController],
    providers: [NotepadService],
})
export class NotepadModule {

}