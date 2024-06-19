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
export class PomodoroComponent implements OnInit {
  private calendarService: CalendarService = inject(CalendarService);

  calendar!: WritableSignal<Calendar>;
  steps: number[] = Array.from(
    new Array(Math.floor(this.calendarService.getMaxTime() / POMODORO_FACTOR))
      .fill(1)
      .keys()
  );
  currentTime: number = 0;

  ngOnInit(): void {
    this.calendar = this.calendarService.getCalendar();
    this.currentTime = this.calendarService.getCurrentTime();
  }

  getCurrentTime() {
    return this.calendarService.getCurrentTime();
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

  getPomodoroFactor() {
    return POMODORO_FACTOR;
  }
}
