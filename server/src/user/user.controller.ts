import {
    Controller,
    Get,
    Body,
    Put,
    UsePipes,
    ValidationPipe,
    HttpCode
} from '@nestjs/common';
import {UserService} from './user.service';
import {UserDto} from "./dto/user.dto";
import {Auth} from "../auth/decorators/auth.decorator";
import {CurrentUser} from "./decorators/user.decorator";
import {Types} from "mongoose";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }


    @HttpCode(200)
    @Get('profile')
    @Auth()
    async getProfile(@CurrentUser('_id') _id: Types.ObjectId) {
        return this.userService.getById(_id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('profile')
    @Auth()
    async updateProfile(@CurrentUser('_id') _id: Types.ObjectId, @Body() dto: UserDto) {
        return this.userService.updateProfile(_id, dto);
    }

    @HttpCode(200)
    @Get('pop-profiles')
    async getMostPopular() {
        return this.userService.getMostPopular()
    }


}
