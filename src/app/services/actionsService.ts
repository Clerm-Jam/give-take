import { Injectable, inject, signal } from '@angular/core';
import { FunctionMap } from '../models/functionMap';
import { CODENAME, MESSAGE_ACTIONS } from '../constants';
import { GameService } from './gameService';
import { CalendarService } from './calendarService';
import { ChatService } from './chatService';

export class ActionsService {
  gameService = inject(GameService)
  calendarService = inject(CalendarService)
  chatService = inject(ChatService)

  private actions: FunctionMap = {
    [MESSAGE_ACTIONS.ACTION_1_1]: () => {
      this.chatService.sendMessage(this.calendarService.getToday(), 0, 'OK.', CODENAME.ME)
    },
  };

  getAction(code: MESSAGE_ACTIONS) {
    return this.actions[code];
  }
}
