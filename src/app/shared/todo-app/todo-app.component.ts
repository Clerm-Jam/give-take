import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WindowsComponent } from '../components/windows/windows.component';
import { TodoService } from '../../services/todoService';
import { CalendarService } from '../../services/calendarService';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [WindowsComponent, CommonModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  todoAppService = inject(TodoService)
  calendarService = inject(CalendarService)

  getTodos() { 
    return this.todoAppService.getTodo(this.calendarService.getToday())
  }
}
