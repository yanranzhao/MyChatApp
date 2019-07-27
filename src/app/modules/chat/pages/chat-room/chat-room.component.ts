import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users.push(
      {
        id: '12345',
        name: 'HA',
        iconUrl: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg'
      },
      {
        id: '6789',
        name: 'WA',
        iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_n3EASaPQah7QwRhd23wF5Hr27rW7FkUc5bixyGIfJOgeiN3'
      }
    );
  }

}
