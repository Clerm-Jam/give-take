import { Component } from '@angular/core';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-profile-card',
  standalone: true,
  imports: [SimplebtnComponent, CommonModule],
  inputs: ['name', 'icon', 'image', 'online', 'action_disabled'],
  templateUrl: './chat-profile-card.component.html',
  styleUrl: './chat-profile-card.component.css'
})

export class ChatProfileCardComponent {
  name: string = "Name";
  icon: string = "...";
  online: boolean = false;
  action_disabled = false;
}
