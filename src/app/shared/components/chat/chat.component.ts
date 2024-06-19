import { Component, OnInit } from '@angular/core';
import { WindowsComponent } from '../windows/windows.component';
import { ChatConversationComponent } from '../chat-conversation/chat-conversation.component';
import { ChatUserListComponent } from '../chat-user-list/chat-user-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [WindowsComponent, ChatUserListComponent, ChatConversationComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})


export class ChatComponent {
  title: string = "Chat";
  chatting: boolean = false;
}
