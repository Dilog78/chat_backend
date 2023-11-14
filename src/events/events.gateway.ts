import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from "@nestjs/websockets";
import {Server} from 'socket.io'
import { MessageService } from "src/message/message.service";
import { IMsg } from "src/message/types/message";

@WebSocketGateway()
export class EventsGateway {
    constructor(private readonly messageService: MessageService){}

    @WebSocketServer()
    server: Server

    @SubscribeMessage('sendmessage')
    async find(@MessageBody() msg: IMsg): Promise<void> {
        const save: boolean = await this.messageService.saveMessage(msg);
        this.server.emit('message', {message: msg.message, save_message: save});
    }
}