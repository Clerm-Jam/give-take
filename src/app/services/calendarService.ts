import { Injectable, signal } from '@angular/core';
import { DAYS } from '../constants';
import { Calendar } from '../models/calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private calendar = signal<Calendar>({
    current_day: DAYS.DAY_ONE,
  });

  getToday() {
    return this.calendar().current_day;
  }
}
