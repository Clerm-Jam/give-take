import { Component } from '@angular/core';
import { ChatProfileCardComponent } from '../chat-profile-card/chat-profile-card.component';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';
import { ChatActionsPanelComponent } from '../chat-actions-panel/chat-actions-panel.component';
import { Message } from '../../../models/message';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

@Component({
  selector: 'app-chat-conversation',
  standalone: true,
  imports: [ChatProfileCardComponent, CommonModule, ChatActionsPanelComponent, ChatMessageComponent],
  templateUrl: './chat-conversation.component.html',
  styleUrl: './chat-conversation.component.css'
})
export class ChatConversationComponent {
  user_me: User = { name: "Genius (me)", icon: "=3", online: true};
  user_other: User = { name: "Juan", icon: "=)", online: true};
  messages: Message[] = [
    { from: this.user_me, content: "Hello, how are you?", me: true},
    { from: this.user_other, content: "Fine, thanks!", me: false},
    { from: this.user_me, content: "Good to hear that!", me: true},
    { from: this.user_other, content: "What about you?", me: false},
    { from: this.user_me, content: "I'm fine too, thanks!", me: true},
    { from: this.user_other, content: "Great!", me: false},
    { from: this.user_me, content: "I have to go now, see you!", me: true},
    { from: this.user_other, content: "Bye!", me: false}
  ];
}
