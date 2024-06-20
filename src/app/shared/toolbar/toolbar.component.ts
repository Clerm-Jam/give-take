import { Component } from '@angular/core';
import { SimplebtnComponent } from '../components/simplebtn/simplebtn.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [SimplebtnComponent, ],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  
}
