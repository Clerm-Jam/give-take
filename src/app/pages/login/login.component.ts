import { Component} from '@angular/core';
import { WindowsComponent } from '../../shared/components/windows/windows.component';
import { SimplebtnComponent } from '../../shared/components/simplebtn/simplebtn.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [WindowsComponent, SimplebtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSelectUsser = true;
  isHacker = false;

  
}
