import { Message } from '../models/message';
import { Subject } from 'rxjs';

export class ChatService {

  messageEmitter = new Subject<Message>();
  ws: WebSocket;

  wsDictionary = new Map<string, WebSocket>();

  constructor() { 
    this.ws  = new WebSocket('wss://50qd54anrg.execute-api.us-east-2.amazonaws.com/dev');

    this.ws.addEventListener("message", (message)=>{
      this.messageEmitter.next(JSON.parse(message.data));
    });
  }

  /**
   * @function sendMessage
   * @param {Message} userInput : Message data sent by the user
   * @description Send message data to the backend
   */
  public sendMessage(userInput: Message): void {
    this.ws.send(JSON.stringify(userInput));
  }
}
