import { Injectable, inject, signal } from '@angular/core';
import { FunctionMap } from '../models/functionMap';
import { CODENAME, MESSAGE_ACTIONS } from '../constants';
import { GameService } from './gameService';
import { CalendarService } from './calendarService';
import { ChatService } from './chatService';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  gameService = inject(GameService)
  calendarService = inject(CalendarService)
  chatService = inject(ChatService)

  private actions: FunctionMap = {
    [MESSAGE_ACTIONS.ACTION_1_1]: (convo:number) => {
      this.chatService.sendMessage(this.calendarService.getToday(), convo, 'OK.', CODENAME.ME)
    },
    [MESSAGE_ACTIONS.ACTION_1_2]: (convo: number) => {
      this.chatService.sendMessage(this.calendarService.getToday(), convo, 'Working hard!', CODENAME.ME)
      this.chatService.sendMessage(this.calendarService.getToday(), convo, ':D', CODENAME.JUAN)
    },
    [MESSAGE_ACTIONS.ACTION_1_3]: (convo: number) => {
      this.chatService.sendMessage(this.calendarService.getToday(), convo, '<Ignore him>', CODENAME.ME)
      this.chatService.sendMessage(this.calendarService.getToday(), convo, 'Who?', CODENAME.JUAN)
    }
  };

  getAction(code: MESSAGE_ACTIONS) {
    return this.actions[code];
  }
}
