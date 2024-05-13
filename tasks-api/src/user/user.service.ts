import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UserService {

    private users: UserDto[] = [];

    create(newUser: UserDto) {
        newUser.id = uuid();
        newUser.password = bcryptHashSync(newUser.password, 10);
        this.users.push(newUser);
    }

    findByUserName(username: string): UserDto {
        return this.users.find(user => user.username === username);
    }
}
