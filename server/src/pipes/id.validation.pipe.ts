import {ArgumentMetadata, BadRequestException, PipeTransform} from "@nestjs/common";
import {Types} from "mongoose";


export class IdValidationPipe implements PipeTransform{
    transform(value: string, metadata: ArgumentMetadata): string {
        if(metadata.type !== 'param') {
            return value
        }
        if (!Types.ObjectId.isValid(value)) {
            throw new BadRequestException('Invalid ID format')
        }
        return  value
    }
}