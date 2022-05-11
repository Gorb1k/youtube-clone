import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
  HttpCode
} from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto} from "./dto/user.dto";


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  //TODO: AuthDecorator && UserDecorator
  updateProfile(@Body() dto: UserDto) {
    return this.userService.updateProfile('6276904694544c5832379265',dto);
  }


}
