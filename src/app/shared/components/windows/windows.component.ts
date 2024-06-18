import { Component } from '@angular/core';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [],
  inputs: ['title', 'closeIcon'],
  templateUrl: './windows.component.html',
})
export class WindowsComponent {
  title: string = "Title";
  closeIcon: string = "/assets/icons/close.svg"
}
