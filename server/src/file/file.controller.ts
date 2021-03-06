import {Controller, HttpCode, Post, Query, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileService} from './file.service';
import {Auth} from "../auth/decorators/auth.decorator";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) {
    }


    @Post()
    @HttpCode(200)
    @Auth()
    @UseInterceptors(FileInterceptor('media'))
    async uploadFile(
        @UploadedFile() mediaFile: Express.Multer.File,
        @Query('folder') folder?:string
    ) {
        return this.fileService.saveMedia(mediaFile, folder)
    }
}
