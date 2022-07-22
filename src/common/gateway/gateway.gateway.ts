import { WebSocketGateway } from '@nestjs/websockets';
import { GatewayService } from './gateway.service';

@WebSocketGateway()
export class GatewayGateway {
  constructor(private readonly gatewayService: GatewayService) {}
}
