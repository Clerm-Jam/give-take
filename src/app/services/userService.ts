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
      }
    },
    [CODENAME.BOSS]: {
      info: USERS[CODENAME.BOSS],
      status: {
        online: true,
        hidden: false,
      }
    },
    [CODENAME.JUAN]: {
      info: USERS[CODENAME.JUAN],
      status: {
        online: true,
        hidden: false,
      },
    },
    [CODENAME.HACKER]: {
      info: USERS[CODENAME.HACKER],
      status: {
        online: false,
        hidden: true,
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
