import { Component } from '@angular/core';
import { Message } from '../../../models/message';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [SimplebtnComponent, CommonModule],
  inputs: ['message'],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  message: Message = { from: { name: "", icon: "", online: false}, content: "", me: false};
}
