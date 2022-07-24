import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
@Dependencies(UsersService, JwtService)
export class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }

    async validateUser(username, pass) {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.username, sub: user.userId, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}