import { Injectable, signal } from '@angular/core';
import { CODENAME, DAYS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  private tracker = signal<{ [key: string]: {[key:string]: string[]} }>({
    [DAYS.DAY_ONE]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
    [DAYS.DAY_TWO]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
    [DAYS.DAY_THREE]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
    [DAYS.DAY_FOUR]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
    [DAYS.DAY_FIVE]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
    [DAYS.DAY_SIX]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
    [DAYS.DAY_SEVEN]: {
      [CODENAME.JUAN]: [],
      [CODENAME.ME]: [],
    },
  });

  getTracker(day: DAYS, user: CODENAME) {
    return this.tracker()[day][user];
  }
}
