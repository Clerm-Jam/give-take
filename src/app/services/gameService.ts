import { Injectable, signal } from '@angular/core';
import { DAYS } from '../constants';

const DEFAULT_GAME_STATE = {
  [DAYS.START]: {
    logged_in: true,
    chatActive: false,
  },
  [DAYS.DAY_ONE]: {
    logged_in: false,
    chatActive: true
  },
  [DAYS.DAY_TWO]: {
    logged_in: false,
    chatActive: false
  }
}
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameState = signal<{ [key: string]: { logged_in: boolean, chatActive: boolean } }>(DEFAULT_GAME_STATE);

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

  isChatActive(day: DAYS) {
    return this.gameState()[day].chatActive
  }

  openChat(day: DAYS) {
    this.gameState.update((state) => {
      state[day].chatActive = true
      return state
    })
  }

  closeChat(day: DAYS) {
    this.gameState.update((state) => {
      state[day].chatActive = false
      return state
    })
  }
}
