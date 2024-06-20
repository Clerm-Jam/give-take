import { Component } from '@angular/core';
import { WindowsComponent } from '../windows/windows.component';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nile-dot-com',
  standalone: true,
  imports: [WindowsComponent, SimplebtnComponent, CommonModule],
  templateUrl: './nileDotCom.component.html',
})
export class NileComComponent {
  byeText = false;
  value = '';
  error = false;

  numbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = "*".repeat(input.value.length);
  }

  cardHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    input.value = this.value.slice(0, input.value.length - 1);
  }

  buyHandler = () => {
    this.byeText = true;
  }

  getError() {
    return this.error
  }
}
