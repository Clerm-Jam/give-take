import { Component, inject, WritableSignal } from '@angular/core';
import { WindowsComponent } from '../components/windows/windows.component';
import { UserService } from '../../services/userService';
import { UserInfo } from '../../models/userInfo';
import { UserDatabase } from '../../models/userDatabase';
import { UserStatus } from '../../models/userStatus';

@Component({
  selector: 'app-performance-tracker',
  standalone: true,
  imports: [WindowsComponent],
  templateUrl: './performance-tracker.component.html',
  styleUrl: './performance-tracker.component.css',
})
export class PerformanceTrackerComponent {
  private userService = inject(UserService);

  users!: WritableSignal<UserDatabase>;

  userInfos: {
    info: UserInfo;
    status: UserStatus;
  }[] = [];

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userInfos = Object.values(this.users());
  }
}
