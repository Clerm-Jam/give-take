import { Injectable, signal } from '@angular/core';
import { UserDatabase } from '../models/userDatabase';
import { CODENAME, USERS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = signal<UserDatabase>({
    [CODENAME.ME]: {
      info: USERS[CODENAME.ME],
      status: {
        online: true,
        hidden: false,
        points: 0,
      }
    },
    [CODENAME.BOSS]: {
      info: USERS[CODENAME.BOSS],
      status: {
        online: false,
        hidden: false,
        points: 9999,
      }
    },
    [CODENAME.JUAN]: {
      info: USERS[CODENAME.JUAN],
      status: {
        online: true,
        hidden: false,
        points: 450,
      },
    },
    [CODENAME.HACKER]: {
      info: USERS[CODENAME.HACKER],
      status: {
        online: false,
        hidden: true,
        points: 100,
      },
    },
  });

  getUsers() {
    return this.users;
  }

  getUser(code: CODENAME) {
    return this.users()[code]
  }
}
