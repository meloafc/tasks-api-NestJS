import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './auth-response.dto';
import { AuthRequestDto } from './auth-request.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() request: AuthRequestDto): AuthResponseDto {
        return this.authService.signIn(request.username, request.password);
    }
}
