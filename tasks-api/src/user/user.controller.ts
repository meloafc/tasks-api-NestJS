import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() user: UserDto) {
        return this.userService.create(user);
    }
}
