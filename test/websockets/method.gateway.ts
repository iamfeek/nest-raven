import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets'
import { RavenInterceptor } from '../../lib';
import { UseInterceptors } from '@nestjs/common';

@WebSocketGateway(4466)
export class MethodGateway {


    @UseInterceptors(new RavenInterceptor({ context: 'Ws' }))
    @SubscribeMessage('test_error')
    on_test_error(client, data: string): string {
        throw new Error('Something bad happened');
    }
}
