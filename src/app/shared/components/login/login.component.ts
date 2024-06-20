import { Component, WritableSignal, inject } from '@angular/core';
import { WindowsComponent } from '../windows/windows.component';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { UserService } from '../../../services/userService';
import { UserDatabase } from '../../../models/userDatabase';
import { UserInfo } from '../../../models/userInfo';
import { WindowManagerComponent } from '../window-manager/window-manager.component';
import { WINDOW_PLACEMENT } from '../../../constants';
import { CalendarService } from '../../../services/calendarService';
import { Router } from '@angular/router';
import { GameService } from '../../../services/gameService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [WindowsComponent, SimplebtnComponent, WindowManagerComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  onSelectUser = true;
  isHacker = false;
  winTitle = 'Login to work';
  validPassword = false;

  private userService = inject(UserService);
  private calendarService = inject(CalendarService);
  private gameService = inject(GameService);

  users!: WritableSignal<UserDatabase>;

  userInfos: UserInfo[] = [];

  validUser = false;

  //injects the router for navigation
  constructor(private router: Router) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userInfos = Object.values(this.users()).map((element) => element.info);
  }

  windowPlacement = WINDOW_PLACEMENT.CENTER;

  login(user: string) {
    this.onSelectUser = false;
    this.winTitle = 'Login as ' + user;
    if (user === 'Genius') {
      this.validUser = true;
    }
  }

  goBack() {
    this.onSelectUser = true;
    this.winTitle = 'Login to work';
  }

  handleinputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const passwordLength = input.value.length;
    if (passwordLength > 4 && this.validUser) {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
    input.value = '*'.repeat(passwordLength);
  }

  nextPath() {
    if (this.validPassword) {
      this.gameService.logIn(this.calendarService.getToday());
      this.calendarService.startDay()
     }
  }
}
