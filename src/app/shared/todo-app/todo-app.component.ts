import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WindowsComponent } from '../components/windows/windows.component';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [WindowsComponent, CommonModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  toDos = [
    {title: 'Completar la nueva feature con menos de 5 errores',
      completed: false,
    },
    {
      title: 'Sabotear o ayudar a Juan',
      completed: false,
    }
  ]
}
