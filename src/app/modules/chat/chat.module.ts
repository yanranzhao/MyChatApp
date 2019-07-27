import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { MessageComponent } from './components/message/message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

@NgModule({
  declarations: [ChatRoomComponent, MessageComponent, ChatWindowComponent],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
