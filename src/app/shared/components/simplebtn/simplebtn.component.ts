import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simplebtn',
  standalone: true,
  imports: [CommonModule],
  inputs: ['text', 'action', 'parameters', 'full'],
  templateUrl: './simplebtn.component.html',
})
export class SimplebtnComponent {
  text: string = "Button";
  action: Function = () => {};
  parameters: (string|number)[] = [];
  full: boolean = false;
}
