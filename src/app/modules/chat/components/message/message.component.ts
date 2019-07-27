import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input('user') moi: User;

  isMoi: boolean;

  constructor() {
  }

  ngOnInit() {

    this.isMoi = this.message.sender.id === this.moi.id ? true : false;
  }

}
