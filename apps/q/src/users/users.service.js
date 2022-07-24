import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
                role: 'admin',
            },
            {
                userId: 2,
                username: 'maria',
                password: 'guess',
                role: 'user',
            },
        ];
    }

    async findOne(username) {
        return this.users.find(user => user.username === username);
    }
}