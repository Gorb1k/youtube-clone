import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import {ServeStaticModule} from '@nestjs/serve-static'
import {path} from "app-root-path"; // предоставляет путь к приложению

@Module({
  controllers: [FileController],
  providers: [FileService],
  imports: [
      ServeStaticModule.forRoot({ //для работы со статичными файлами
        rootPath:`${path}/uploads`,
          serveRoot: '/uploads'
      })
  ]
})
export class FileModule {}
