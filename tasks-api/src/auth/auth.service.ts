import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthResponseDto } from './auth-response.dto';

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {
        this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME');
    }

    signIn(username: string, password: string): AuthResponseDto {
        const foundUser = this.usersService.findByUserName(username);

        if (!foundUser || !bcryptCompareSync(password, foundUser.password)) {
          throw new UnauthorizedException();
        }
    
        const payload = { sub: foundUser.id, username: foundUser.username };
    
        const token = this.jwtService.sign(payload);
        return { token, expiresIn: this.jwtExpirationTimeInSeconds };
      }

}
