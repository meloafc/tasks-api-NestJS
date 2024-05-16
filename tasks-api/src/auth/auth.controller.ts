import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './auth-response.dto';
import { AuthRequestDto } from './auth-request.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() request: AuthRequestDto): Promise<AuthResponseDto> {
        return  await this.authService.signIn(request.username, request.password);
    }
}
