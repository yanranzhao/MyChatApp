import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messageEmitter = new Subject<Message>();

  constructor() { }

  /**
   * @function sendMessage
   * @param {Message} userInput : Message data sent by the user
   * @description Send message data to the backend
   */
  public sendMessage(userInput: Message): void {
    this.messageEmitter.next(userInput);
  }
}
