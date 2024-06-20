import { Component, OnChanges, OnInit, SimpleChanges, WritableSignal, effect, inject } from '@angular/core';
import { ChatProfileCardComponent } from '../chat-profile-card/chat-profile-card.component';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../models/userInfo';
import { ChatActionsPanelComponent } from '../chat-actions-panel/chat-actions-panel.component';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { FlatMessage } from '../../../models/flatMessage';
import { UserService } from '../../../services/userService';
import { UserDatabase } from '../../../models/userDatabase';
import { CODENAME } from '../../../constants';
import { MessageAction } from '../../../models/messageAction';
import { ChatService } from '../../../services/chatService';
import { CalendarService } from '../../../services/calendarService';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-conversation',
  standalone: true,
  imports: [
    ChatProfileCardComponent,
    CommonModule,
    ChatActionsPanelComponent,
    ChatMessageComponent,
    SimplebtnComponent,
  ],
  inputs: ['user_me', 'user_other'],
  templateUrl: './chat-conversation.component.html',
})
export class ChatConversationComponent implements OnInit {
  chatService = inject(ChatService);
  calendarService = inject(CalendarService);
  paricipants: UserInfo[] = [];

  private userService = inject(UserService);

  users!: WritableSignal<UserDatabase>;

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  
  getCurrentConversation() {
    return this.chatService.getCurrentConversation(
      this.calendarService.getToday()
    );
  }

  getUserInfo(codename: CODENAME): UserInfo {
    return this.userService.getUser(codename).info;
  }

  getFlatMessages(): FlatMessage[] {
    return (
      this.getCurrentConversation()?.messages.map((message) => {
        const from_info = this.getUserInfo(message.from);
        return {
          content: message.content,
          from_name: from_info.name,
          from_icon: from_info.icon,
          me: message.from == CODENAME.ME,
        };
      }) || []
    );
  }

  getActions(): MessageAction[] {
    return this.getCurrentConversation()?.actions || [];
  }

  getSelectedChat() {
    return this.chatService.getSelectedChat(this.calendarService.getToday());
  }

  handleBack = () =>
    this.chatService.setChatting(this.calendarService.getToday(), false);
}
