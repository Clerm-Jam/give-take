import { Component } from '@angular/core';
import { WindowsComponent } from '../../shared/components/windows/windows.component';
import { SimplebtnComponent } from '../../shared/components/simplebtn/simplebtn.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-day-one',
  standalone: true,
  imports: [SimplebtnComponent, WindowsComponent, ToolbarComponent],
  templateUrl: './day-one.component.html',
  styleUrl: './day-one.component.css'
})
export class DayOneComponent {
  codeToWrite =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nihil quod delectus atque, modi voluptates, placeat rem labore omnis voluptate consequuntur facilis! Deserunt nesciunt enim ab ipsum iure modi a.';
  stringLenght = 0;
  currentText = '';

  previousLetter = '';
  actualLetter = '';

  errors = 0;

  detectKey(event: KeyboardEvent) {
    console.log('Previous ' + this.previousLetter)

    this.actualLetter = event.key;
    console.log('actual ' + this.actualLetter)

    this.previousLetter = event.key;

    if (
      /[a-zA-Z]/.test(event.key) &&
      this.stringLenght < this.codeToWrite.length
    ) {
      this.currentText += this.codeToWrite.charAt(this.stringLenght);
      this.stringLenght++;
    }
  }
}
