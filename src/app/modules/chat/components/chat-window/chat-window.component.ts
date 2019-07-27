import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Input('user') moi: User;
  @ViewChild('inputbox') inputBox: ElementRef;

  messages: Message[] = [];

  constructor(private chatService: ChatService) { }


  ngOnInit() {
    this.chatService.messageEmitter.subscribe(
      res => {
        this.messages.push(res);
      }
    );
  }

  public onSubmit($event): void {

    console.log(this.inputBox.nativeElement.value);

    let messageData = {} as Message;

    messageData.sender = this.moi;
    messageData.content = this.inputBox.nativeElement.value;
    this.chatService.sendMessage(messageData);

    this.inputBox.nativeElement.value = '';
  }

}
