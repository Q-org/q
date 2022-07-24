import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies, Request, Bind } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(authService, moduleRef) {
        super({
            passReqToCallback: true,
        });
        this.authService = authService;
    }
    @Bind(Request())
    async validate(req, username, password) {
        const contextId = ContextIdFactory.getByRequest(req);
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}