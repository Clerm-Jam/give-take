import { Component } from '@angular/core';
import { ChatProfileCardComponent } from '../chat-profile-card/chat-profile-card.component';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';

@Component({
  selector: 'app-chat-user-list',
  standalone: true,
  imports: [CommonModule, ChatProfileCardComponent],
  templateUrl: './chat-user-list.component.html',
  styleUrl: './chat-user-list.component.css'
})
export class ChatUserListComponent {
  users: User[] = [{ name: "Juan", icon: "=)", online: true}, { name: "TheBoss", icon: ":<", online: true}, { name: "DarknessMystery22", icon: "B)", online: false}];
  chatting: boolean = false;
}
