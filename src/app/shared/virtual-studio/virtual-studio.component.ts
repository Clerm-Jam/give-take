import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { WindowsComponent } from '../components/windows/windows.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/gameService';
import { CalendarService } from '../../services/calendarService';
import { TodoService } from '../../services/todoService';

@Component({
  selector: 'app-virtual-studio',
  standalone: true,
  imports: [WindowsComponent, CommonModule],
  templateUrl: './virtual-studio.component.html',
  styleUrls: ['./virtual-studio.component.css'] // Asegúrate de importar tu archivo CSS si lo usas
})
export class VirtualStudioComponent implements OnInit {
  calendarService = inject(CalendarService);
  todoAppService = inject(TodoService)

  stringLenght = 0;
  currentText = '';
  codeToWrite = '';
  previousLetters = '';
  errors = 0;
  combo = 0;

  @ViewChild('textContainer', { static: true }) textContainer!: ElementRef;

  async importText() {
    const rest = await fetch('/assets/icons/code.txt');
    if (!rest.ok) {
      return;
    }
    this.codeToWrite = await rest.text();
  }

  ngOnInit() {
    this.importText();
  }

  detectKey(event: KeyboardEvent) {
    if (
      /^[a-zA-Z0-9]$/.test(event.key) &&
      this.stringLenght < this.codeToWrite.length
    ) {
      if (this.previousLetters.includes(event.key)) {
        this.errors++;
        this.combo = 0;
      }
      this.previousLetters = this.previousLetters.concat(event.key);
      const letters = Array.from(this.previousLetters);
      if (this.previousLetters.length > 3) {
        letters.shift();
        this.previousLetters = letters.join('');
      }
      console.log(this.previousLetters);
      this.currentText += this.codeToWrite.charAt(this.stringLenght);
      this.stringLenght++;
      this.combo++;
      if(this.combo == 15) {
        this.todoAppService.complete(this.calendarService.getToday(), 0)
      }

      // Desplaza el scroll hacia el fondo
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    try {
      this.textContainer.nativeElement.scrollTop = this.textContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}
