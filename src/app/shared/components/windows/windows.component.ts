import { Component } from '@angular/core';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [],
  inputs: ['title', 'size_classes'],
  templateUrl: './windows.component.html',
})
export class WindowsComponent {
  title: string = "Title";
  closeIcon: string = "/assets/icons/close.svg"
  size_classes = "min-w-64 min-h-52 w-fit"
}
