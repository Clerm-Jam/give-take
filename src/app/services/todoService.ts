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
        description: "fdjsjghlfg",
        completed: false
      }
    ],
    [DAYS.DAY_TWO]: [],
    [DAYS.DAY_THREE]: [],
    [DAYS.DAY_FOUR]: [],
    [DAYS.DAY_FIVE]: [],
    [DAYS.DAY_SIX]: [],
    [DAYS.DAY_SEVEN]: []
  });

  getTodo(day: DAYS) {
    return this.todo()[day];
  }
}
