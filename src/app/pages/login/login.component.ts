import { Component } from '@angular/core';
import { WindowsComponent } from '../../shared/components/windows/windows.component';
import { SimplebtnComponent } from '../../shared/components/simplebtn/simplebtn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [WindowsComponent, SimplebtnComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  onSelectUser = true;
  isHacker = false;
  winTitle = 'Login to work';
  validPassword = false;

  users = [
    {
      image: '',
      name: 'Juan',
    },
    {
      image: '',
      name: 'Player',
    },
    {
      image: '',
      name: 'Boss',
    },
  ];

  login(user: string) {
    this.onSelectUser = false;
    this.winTitle = 'Login as ' + user;
  }

  goBack() {
    this.onSelectUser = true;
    this.winTitle = 'Login to work';
  }

  handleinputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const passwordLength = input.value.length;
    if (passwordLength > 0) {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
    input.value = '*'.repeat(passwordLength);
  }

  nextPath() {
    if (this.validPassword) {
      
    }
  }
}
