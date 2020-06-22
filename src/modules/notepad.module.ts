import { NotepadsController } from "src/controllers/notepads.controller";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notepad } from "src/entities/notepad.entity";
import { NotepadsService } from "../services/notepads.service";

@Module({
    imports: [TypeOrmModule.forFeature([Notepad])],
    controllers: [NotepadsController],
    providers: [NotepadsService],
})
export class NotepadModule {

}
