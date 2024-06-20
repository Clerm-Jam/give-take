import { Component } from '@angular/core';
import { Message } from '../../../models/message';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { CommonModule } from '@angular/common';
import { CODENAME } from '../../../constants';
import { FlatMessage } from '../../../models/flatMessage';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [SimplebtnComponent, CommonModule],
  inputs: ['message', 'typing'],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  typing: boolean = false
  message: FlatMessage = { content: "", from_name: "", from_icon: "", me: false};
}
