import { NotepadsController } from "src/controllers/notepads.controller";
import { Module } from '@nestjs/common';
import { NotepadsService } from "src/services/notepads.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notepad } from "src/entities/notepad.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Notepad])],
    controllers: [NotepadsController],
    providers: [NotepadsService],
})
export class NotepadModule {

}