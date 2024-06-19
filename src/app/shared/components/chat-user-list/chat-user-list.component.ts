import { Component, WritableSignal, inject } from '@angular/core';
import { ChatProfileCardComponent } from '../chat-profile-card/chat-profile-card.component';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../models/userInfo';

@Component({
  selector: 'app-chat-user-list',
  standalone: true,
  imports: [CommonModule, ChatProfileCardComponent],
  inputs: ['onlineUsers'],
  templateUrl: './chat-user-list.component.html',
  styleUrl: './chat-user-list.component.css',
})
export class ChatUserListComponent {
  onlineUsers: UserInfo[] = [];
}
