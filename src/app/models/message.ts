import {User} from './user';

export interface Message {
  action: string;
  sender: User;
  content: string;
}
