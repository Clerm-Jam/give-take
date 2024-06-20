import { Injectable, signal } from '@angular/core';
import { DAYS } from '../constants';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todo = signal<{ [key: string]: Task[] }>({
    [DAYS.DAY_ONE]: [
      {
        description: 'Completar la nueva feature con x10 combo',
        completed: false
      }, {
        description: 'Responder a Juan',
        completed: false
      }
    ],
    [DAYS.DAY_TWO]: [
      {
        description: "Que no te roben la plata",
        completed: false
      }
    ],
    [DAYS.DAY_THREE]: [],
    [DAYS.DAY_FOUR]: [],
    [DAYS.DAY_FIVE]: [],
    [DAYS.DAY_SIX]: [],
    [DAYS.DAY_SEVEN]: []
  });

  getTodo(day: DAYS) {
    return this.todo()[day];
  }

  complete(day: DAYS, index: number) {
    this.todo.update((state) => {
      state[day][index].completed = true;
      return state;
    });
  }
}
