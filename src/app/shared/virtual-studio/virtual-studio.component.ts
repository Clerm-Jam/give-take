import { Component } from '@angular/core';
import { WindowsComponent } from '../components/windows/windows.component';

@Component({
  selector: 'app-virtual-studio',
  standalone: true,
  imports: [WindowsComponent],
  templateUrl: './virtual-studio.component.html',
})
export class VirtualStudioComponent {
  codeToWrite =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil quod delectus atque, modi voluptates, placeat rem labore omnis voluptate consequuntur facilis! Deserunt nesciunt enim ab ipsum iure modi a.';
  stringLenght = 0;
  currentText = '';

  previousLetter = '';
  actualLetter = '';

  errors = 0;

  combo = 0;

  detectKey(event: KeyboardEvent) {
    console.log('Previous ' + this.previousLetter);

    this.actualLetter = event.key;
    console.log('actual ' + this.actualLetter);

    if (this.previousLetter === this.actualLetter) {
      this.errors++;
      this.combo = 0;
    }

    this.previousLetter = event.key;

    if (
      /[a-zA-Z]/.test(event.key) &&
      this.stringLenght < this.codeToWrite.length
    ) {
      this.currentText += this.codeToWrite.charAt(this.stringLenght);
      this.stringLenght++;
      this.combo++;
    }
  }
}
