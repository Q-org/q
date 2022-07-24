import { Injectable } from '@nestjs/common';

@Injectable()
export class GService {
  getHello(): string {
    return 'Hello World!';
  }
}
