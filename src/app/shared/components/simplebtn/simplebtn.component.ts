import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MESSAGE_ACTIONS } from '../../../constants';

@Component({
  selector: 'app-simplebtn',
  standalone: true,
  imports: [CommonModule],
  inputs: ['text', 'action', 'parameters', 'full'],
  templateUrl: './simplebtn.component.html',
})
export class SimplebtnComponent {
  text: string = 'Button';
  action: Function | null = null;
  parameters: (string | number)[] = [];
  full: boolean = false;

  onClick() {
    if (this.action) {
      this.action(...this.parameters)
    } else {
      //pass
    }
  }
}
