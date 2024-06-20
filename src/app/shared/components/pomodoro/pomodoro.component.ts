import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { CalendarService } from '../../../services/calendarService';
import { Calendar } from '../../../models/calendar';
import { POMODORO_FACTOR } from '../../../constants';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule],
  inputs: ['time'],
  templateUrl: './pomodoro.component.html',
})
export class PomodoroComponent {
  private calendarService: CalendarService = inject(CalendarService);

  calendar!: WritableSignal<Calendar>;
  steps: number[] = Array.from(
    new Array(Math.floor(this.calendarService.getMaxTime() / POMODORO_FACTOR))
      .fill(1)
      .keys()
  );
  tenDays = Array.from(
    new Array(10)
      .fill(1)
      .map((el, idx) => idx)
  )

  getCurrentTime() {
    return this.calendarService.getCurrentTime();
  }

  getMaxTime() {
    return this.calendarService.getMaxTime();
  }

  getTodayName() {
    return this.calendarService.getTodayName();
  }

  getToday() {
    return this.calendarService.getToday();
  }

  dayStarted() {
    return this.calendarService.dayStarted();
  }

  startDay() {
    this.calendarService.startDay();
  }

  getProgress() {
    return Math.floor(this.getCurrentTime() / POMODORO_FACTOR);
  }
}
