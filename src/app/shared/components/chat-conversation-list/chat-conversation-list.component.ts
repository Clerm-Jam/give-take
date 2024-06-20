import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationTitleCardComponent } from '../conversation-title-card/conversation-title-card.component';
import { Conversation } from '../../../models/coversation';

@Component({
  selector: 'app-chat-conversation-list',
  standalone: true,
  imports: [CommonModule, ConversationTitleCardComponent],
  inputs: ['conversations', 'handler'],
  templateUrl: './chat-conversation-list.component.html'
})
export class ChatConversationListComponent {
  conversations: Conversation[] = [];
  handler = (index:number) => {}
}
