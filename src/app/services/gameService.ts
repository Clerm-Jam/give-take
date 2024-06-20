import { Injectable, signal } from '@angular/core';
import { DAYS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameState = signal<{ [key: string]: { logged_in: boolean } }>({
    [DAYS.START]: {
      logged_in: true,
    },
    [DAYS.DAY_ONE]: {
      logged_in: false,
    },
  });

  logIn(day: DAYS) {
    this.gameState.update((state) => {
      const dayData = state[day]
      dayData.logged_in = true
      state[day] = dayData
      return state
    })
  }

  isLoggedIn(day: DAYS) {
    return this.gameState()[day].logged_in
  }
}
