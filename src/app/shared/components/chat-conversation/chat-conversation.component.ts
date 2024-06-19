import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { ChatProfileCardComponent } from '../chat-profile-card/chat-profile-card.component';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../models/userInfo';
import { ChatActionsPanelComponent } from '../chat-actions-panel/chat-actions-panel.component';
import { Message } from '../../../models/message';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { FlatMessage } from '../../../models/flatMessage';
import { Conversation } from '../../../models/coversation';
import { UserService } from '../../../services/userService';
import { UserDatabase } from '../../../models/userDatabase';
import { CODENAME } from '../../../constants';
import { MessageAction } from '../../../models/messageAction';

@Component({
  selector: 'app-chat-conversation',
  standalone: true,
  imports: [
    ChatProfileCardComponent,
    CommonModule,
    ChatActionsPanelComponent,
    ChatMessageComponent,
  ],
  inputs: ['conversation', 'user_me', 'user_other'],
  templateUrl: './chat-conversation.component.html',
  styleUrl: './chat-conversation.component.css',
})

export class ChatConversationComponent implements OnInit {
  paricipants: UserInfo[] = []
  conversation: Conversation = {title: "", messages: [], actions: []};

  private userService = inject(UserService);

  users!: WritableSignal<UserDatabase>;

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  getUserInfo(codename: CODENAME): UserInfo {
    return this.userService.getUser(codename).info;
  }

  getFlatMessages(): FlatMessage[] {
    return this.conversation.messages.map(message => {
      const from_info = this.getUserInfo(message.from); 
      return {
        content: message.content,
        from_name: from_info.name,
        from_icon: from_info.icon,
        me: message.from == CODENAME.ME
      };
    })  
  }
  
  getActions(): MessageAction[] {
    return this.conversation.actions;
  }
}
