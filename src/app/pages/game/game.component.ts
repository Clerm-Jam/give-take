import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
import { DayOneComponent } from '../../shared/components/day-one/day-one.component';
import { DAYS } from '../../constants';
import { CalendarService } from '../../services/calendarService';
import { StartDayComponent } from '../../shared/components/start-day/start-day.component';
import { GameManagerComponent } from '../../shared/components/game-manager/game-manager.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [StartDayComponent, DayOneComponent, GameManagerComponent],
  templateUrl: './game.component.html',
})
export class GameComponent {
  calendarService = inject(CalendarService);

  getCurrentDay() {
    return this.calendarService.getToday();
  }

  getStartDay() {
    return DAYS.START;
  }

  getStart() {
    return DAYS.START;
  }

  getDayOne() {
    return DAYS.DAY_ONE;
  }

  getDayTwo() {
    return DAYS.DAY_TWO;
  }

  getDayThree() {
    return DAYS.DAY_THREE;
  }

  getDayFour() {
    return DAYS.DAY_FOUR;
  }

  getDayFive() {
    return DAYS.DAY_FIVE;
  }

  getDaySix() {
    return DAYS.DAY_SIX;
  }

  getDaySeven() {
    return DAYS.DAY_SEVEN;
  }

  getEnd() {
    return DAYS.END;
  }
}
