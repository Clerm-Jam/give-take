import { Component, inject } from '@angular/core';
import { GameService } from '../../../services/gameService';
import { CalendarService } from '../../../services/calendarService';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';
import { TodoService } from '../../../services/todoService';
import { DAYS } from '../../../constants';

@Component({
  selector: 'app-game-manager',
  standalone: true,
  imports: [LoginComponent, CommonModule, ChatComponent],
  templateUrl: './game-manager.component.html'
})
export class GameManagerComponent {
  gameService = inject(GameService)
  calendarService = inject(CalendarService)
  todoService = inject(TodoService)

  timeOver() {
    return this.calendarService.getCurrentTime() == 0
  }

  advance() {
    this.calendarService.nextDay()
  }
  
  isLoggedIn() {
    return this.gameService.isLoggedIn(this.calendarService.getToday())
  }

  isChatActive() {
    return this.gameService.isChatActive(this.calendarService.getToday())
  }
  
  allCompleted() {
    const todos = this.todoService.getTodo(this.calendarService.getToday())
    return todos.every(todo => todo.completed)
  }
}
