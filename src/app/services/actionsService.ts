import { Injectable, signal } from '@angular/core';
import { FunctionMap } from '../models/functionMap';
import { MESSAGE_ACTIONS } from '../constants';

@Injectable({
  providedIn: 'root',
})

export class ActionsService {
  private actions: FunctionMap = {
    [MESSAGE_ACTIONS.ACTION_1_1]: () => {
      alert('LALALALA');
    },
    [MESSAGE_ACTIONS.ACTION_1_2]: () => {
      alert('LELELELE');
    },
  };

  getAction(code: MESSAGE_ACTIONS) {
    return this.actions[code];
  }
}
