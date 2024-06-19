import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { WindowsComponent } from '../windows/windows.component';
import { ChatConversationComponent } from '../chat-conversation/chat-conversation.component';
import { ChatUserListComponent } from '../chat-user-list/chat-user-list.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/userService';
import { ChatService } from '../../../services/chatService';
import { CalendarService } from '../../../services/calendarService';
import { UserDatabase } from '../../../models/userDatabase';

import { MessageList } from '../../../models/messageList';
import { DAYS } from '../../../constants';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    WindowsComponent,
    ChatUserListComponent,
    ChatConversationComponent,
    CommonModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit {
  title: string = 'Chat';
  chatting: boolean = true;

  private userService = inject(UserService);
  private chatService = inject(ChatService);
  private calendarService = inject(CalendarService);

  users!: WritableSignal<UserDatabase>;
  today: DAYS = DAYS.DAY_ONE;
  day_data: MessageList = {
    active_users: [],
    conversations: [],
  };
  selected_chat: number = 0;

  ngOnInit(): void {
    this.today = this.calendarService.getToday();
    this.day_data = this.chatService.getDay(this.today);
    this.users = this.userService.getUsers();
  }

  getOnlineUsersInfo() {
    return this.day_data.active_users.map((user) => this.users()[user].info);
  }

  getConversations() {
    return this.day_data.conversations;
  }

  getCurrentConversation(){
    return this.day_data.conversations[this.selected_chat];
  }
}
