import { Injectable, signal } from '@angular/core';
import { DAYS } from '../constants';
import { Calendar } from '../models/calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private calendar = signal<Calendar>({
    current_day: DAYS.DAY_ONE,
    days: {
      [DAYS.LOGIN]: {
        name: "Login",
        current: 3600,
        max: 3600,
        day_started: false
      },
      [DAYS.DAY_ONE]: {
        name: "Day One",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.DAY_TWO]: {
        name: "Day Two",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.DAY_THREE]: {
        name: "Day Three",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.DAY_FOUR]: {
        name: "Day Four",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.DAY_FIVE]: {
        name: "Day Five",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.DAY_SIX]: {
        name: "Day Six",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.DAY_SEVEN]: {
        name: "Day Seven",
        current: 100,
        max: 100,
        day_started: false
      },
      [DAYS.END]: {
        name: "End",
        current: 3600,
        max: 3600,
        day_started: false
      },
    },
  });

  getToday() {
    return this.calendar().current_day;
  }

  getTodayName() {
    const calendar: Calendar = this.calendar();
    return calendar.days[calendar.current_day].name
  }

  getCurrentTime(): number {
    return this.calendar().days[this.calendar().current_day].current;
  }

  getMaxTime(): number {
    return this.calendar().days[this.calendar().current_day].max;
  }

  getCalendar() {
    return this.calendar;
  }

  dayStarted() {
    return this.calendar().days[this.calendar().current_day].day_started;
  }

  startDay() {
    this.calendar.update((calendar) => {
      calendar.days[calendar.current_day].day_started = true;
      return calendar;
    });
    this.startCountdown();
  }

  tick() {
    this.calendar.update((calendar) => {
      calendar.days[calendar.current_day].current--;
      return calendar
    })
  }

  async startCountdown() {
    while (this.getCurrentTime() > 0) {
      this.tick();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    this.nextDay();
  }

  nextDay() {
      this.calendar.update((calendar) => {
      let nextDay: DAYS = DAYS.LOGIN;
      switch (calendar.current_day) {
        case DAYS.LOGIN:
          nextDay = DAYS.DAY_ONE;
          break;
        case DAYS.DAY_ONE:
          nextDay = DAYS.DAY_TWO;
          break;
        case DAYS.DAY_TWO:
          nextDay = DAYS.DAY_THREE;
          break;
        case DAYS.DAY_THREE:
          nextDay = DAYS.DAY_FOUR;
          break;
        case DAYS.DAY_FOUR:
          nextDay = DAYS.DAY_FIVE;
          break;
        case DAYS.DAY_FIVE:
          nextDay = DAYS.DAY_SIX;
          break;
        case DAYS.DAY_SIX:
          nextDay = DAYS.DAY_SEVEN;
          break;
        case DAYS.DAY_SEVEN:
          nextDay = DAYS.END;
          break;
        case DAYS.END:
          nextDay = DAYS.LOGIN;
          break;
      }
      calendar.current_day = nextDay;
      return calendar;
    });
  }
}
