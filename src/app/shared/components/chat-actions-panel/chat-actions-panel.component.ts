import { Component } from '@angular/core';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { CommonModule } from '@angular/common';
import { Action } from '../../../models/action';

@Component({
  selector: 'app-chat-actions-panel',
  standalone: true,
  imports: [SimplebtnComponent, CommonModule],
  templateUrl: './chat-actions-panel.component.html',
  styleUrl: './chat-actions-panel.component.css'
})
export class ChatActionsPanelComponent {
  actions: Action[] = [
    { text: "One", action: () => { alert("Sending msg 1...");}},
    { text: "Two", action: () => { alert("Sending msg 2...");}}
  ];
}
