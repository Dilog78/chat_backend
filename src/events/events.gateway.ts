import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from "@nestjs/websockets";
import {Server} from 'socket.io'


@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer()
    server: Server

    @SubscribeMessage('user')
    async find(@MessageBody() data: string){
        console.log(data);
        this.server.emit('user', 'data ok');
    }
}