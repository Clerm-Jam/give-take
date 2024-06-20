import { Component, inject } from '@angular/core';
import { SimplebtnComponent } from '../components/simplebtn/simplebtn.component';
import { CalendarService } from '../../services/calendarService';
import { GameService } from '../../services/gameService';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [SimplebtnComponent, ],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  calendarService = inject(CalendarService)
  gameService = inject(GameService)

  handleMessagesClick() {
    this.gameService.openChat(this.calendarService.getToday())
  }
}
