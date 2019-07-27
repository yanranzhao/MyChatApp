import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {
  @Input('user') moi: User;
  @ViewChild('inputbox') inputBox: ElementRef;

  messages: Message[] = [];
  subscription: Subscription;

  constructor(private chatService: ChatService) { }


  ngOnInit() {
    this.subscription = this.chatService.messageEmitter.subscribe(
      res => {
        this.messages.push(res);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit($event): void {

    const messageData = {} as Message;

    messageData.sender = this.moi;
    messageData.content = this.inputBox.nativeElement.value;
    this.chatService.sendMessage(messageData);

    this.inputBox.nativeElement.value = '';
  }

}
