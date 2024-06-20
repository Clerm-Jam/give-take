import { Component, inject } from '@angular/core';
import { GameService } from '../../../services/gameService';
import { CalendarService } from '../../../services/calendarService';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-game-manager',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './game-manager.component.html'
})
export class GameManagerComponent {
  gameService = inject(GameService)
  calendarService = inject(CalendarService)

  isLoggedIn() {
    return this.gameService.isLoggedIn(this.calendarService.getToday())
  }
}
