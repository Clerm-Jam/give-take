import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { WindowsComponent } from '../windows/windows.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/userService';
import { ChatService } from '../../../services/chatService';
import { CalendarService } from '../../../services/calendarService';
import { UserDatabase } from '../../../models/userDatabase';
import { MessageList } from '../../../models/messageList';
import { DAYS } from '../../../constants';
import { GameService } from '../../../services/gameService';
import { ChatConversationListComponent } from '../chat-conversation-list/chat-conversation-list.component';
import { ChatConversationComponent } from '../chat-conversation/chat-conversation.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    WindowsComponent,
    ChatConversationListComponent,
    ChatConversationComponent,
    CommonModule,
  ],
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  title: string = 'Chat';
  private userService = inject(UserService);
  private chatService = inject(ChatService);
  private calendarService = inject(CalendarService);
  private gameService = inject(GameService);

  users!: WritableSignal<UserDatabase>;
  today: DAYS = DAYS.DAY_ONE;

  ngOnInit(): void {
    this.today = this.calendarService.getToday();
    this.users = this.userService.getUsers();
  }

  getChatting() {
    return this.chatService.getChatting(this.today);
  }

  getDayData() {
    return this.chatService.getDay(this.today)
  }

  getOnlineUsersInfo() {
    return this.getDayData().active_users.map((user) => this.users()[user].info);
  }

  getConversations() {
    return this.getDayData().conversations;
  }

  getCurrentConversation() {
    const selectedChat = this.chatService.getSelectedChat(this.calendarService.getToday())
    if (selectedChat != null) {
      return this.getDayData().conversations[selectedChat];
    } else {
      return null
    }
  }

  getTitle() {
    if(this.getCurrentConversation() == null) return 'PingMe'
    return `PingMe - ${this.getCurrentConversation()?.title}`
  }

  handleClose = () => this.gameService.closeChat(this.calendarService.getToday());
  switchToConversation = (index:number) => {
    this.chatService.selectChat(this.calendarService.getToday(), index)
    this.chatService.setChatting(this.calendarService.getToday(), true)
  }
}
