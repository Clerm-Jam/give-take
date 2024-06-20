import { Component } from '@angular/core';
import { Conversation } from '../../../models/coversation';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';

@Component({
  selector: 'app-conversation-title-card',
  standalone: true,
  imports: [SimplebtnComponent],
  inputs: ['conversation', 'index', 'handler'],
  templateUrl: './conversation-title-card.component.html',
})
export class ConversationTitleCardComponent {
  conversation!: Conversation
  index!: number
  handler: (index: number) => void = () => {}

  handleClick(index: number) {
    this.handler(index)
  }
}
