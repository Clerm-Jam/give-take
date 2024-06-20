import { Component, inject } from '@angular/core';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { CommonModule } from '@angular/common';
import { MessageAction } from '../../../models/messageAction';
import { MESSAGE_ACTIONS } from '../../../constants';
import { ActionsService } from '../../../services/actionsService';

@Component({
  selector: 'app-chat-actions-panel',
  standalone: true,
  imports: [SimplebtnComponent, CommonModule],
  inputs: ['actions', 'convo'],
  templateUrl: './chat-actions-panel.component.html',
  styleUrl: './chat-actions-panel.component.css',
})
export class ChatActionsPanelComponent {
  actions: MessageAction[] = [];
  convo: number = 0;
  private actionsService = inject(ActionsService);

  getActionFunction(code: MESSAGE_ACTIONS, convo: number) {
    return () => this.actionsService.getAction(code)(convo);
  }
}
