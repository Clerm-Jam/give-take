import { Component } from '@angular/core';
import { WindowsComponent } from '../../shared/components/windows/windows.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [WindowsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
