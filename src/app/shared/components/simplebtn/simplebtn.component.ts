import { Component } from '@angular/core';

@Component({
  selector: 'app-simplebtn',
  standalone: true,
  imports: [],
  inputs: ['text'],
  templateUrl: './simplebtn.component.html',
})
export class SimplebtnComponent {
  text: string = "Button";
}
