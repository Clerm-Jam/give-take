import { Component, inject } from '@angular/core';
import { WindowManagerComponent } from '../window-manager/window-manager.component';
import { CalendarService } from '../../../services/calendarService';
import { WINDOW_PLACEMENT } from '../../../constants';

@Component({
  selector: 'app-start-day',
  standalone: true,
  imports: [WindowManagerComponent],
  templateUrl: './start-day.component.html',
})
export class StartDayComponent {
  calendarService = inject(CalendarService)
  windowPlacement = WINDOW_PLACEMENT.CENTER
  handleClick() {
    this.calendarService.nextDay()
  }
}
