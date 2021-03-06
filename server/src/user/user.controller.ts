import {
    Controller,
    Get,
    Body,
    Put,
    UsePipes,
    ValidationPipe,
    HttpCode, Param
} from '@nestjs/common';
import {UserService} from './user.service';
import {UserDto} from "./dto/user.dto";
import {Auth} from "../auth/decorators/auth.decorator";
import {CurrentUser} from "./decorators/user.decorator";
import {Types} from "mongoose";
import {IdValidationPipe} from "../pipes/id.validation.pipe";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }


    @HttpCode(200)
    @Get('profile')
    @Auth()
    async getProfile(@CurrentUser('_id') _id: Types.ObjectId) {
        return this.userService.getUserWithCount(_id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('profile')
    @Auth()
    async updateProfile(@CurrentUser('_id') _id: Types.ObjectId, @Body() dto: UserDto) {
        return this.userService.updateProfile(_id, dto);
    }

    //TODO: for ADMIN ONLY!
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('adm-upd-profile/:_id')
    @Auth()
    async updateUser(@Param('_id', IdValidationPipe) _id: Types.ObjectId, @Body() dto: UserDto) {
        return this.userService.updateProfile(_id, dto);
    }

    @HttpCode(200)
    @Get('pop-profiles')
    async getMostPopular() {
        return this.userService.getMostPopular()
    }
    @HttpCode(200)
    @Get(':id')
    async getUser(@Param('id', IdValidationPipe) id: string) {
        return this.userService.getUserWithCount(new Types.ObjectId(id)) //Обязательно нужно преобразовать string в ObjectId
    }

    @HttpCode(200)
    @Get()
    async getAll() {
        return this.userService.getAll()
    }

}
