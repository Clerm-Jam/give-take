import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WINDOW_PLACEMENT } from '../../../constants';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';
import { WallStreetMarqueeComponent } from '../wall-street-marquee/wall-street-marquee.component';

@Component({
  selector: 'app-window-manager',
  standalone: true,
  inputs: ['windowPlacement', 'noPomodoro', 'chatActive'],
  imports: [CommonModule, PomodoroComponent, WallStreetMarqueeComponent],
  templateUrl: './window-manager.component.html',
})
export class WindowManagerComponent {
  windowPlacement: WINDOW_PLACEMENT = WINDOW_PLACEMENT.NONE;
  noPomodoro: boolean = false;
  chatActive = true;

  isChatActive() {
    return this.chatActive;
  }

  isCenterPlacement() {
    return this.windowPlacement === WINDOW_PLACEMENT.CENTER;
  }

  isBigLeftPlacement() {
    return this.windowPlacement === WINDOW_PLACEMENT.BIG_LEFT;
  }

  isFourCornersPlacement() {
    return this.windowPlacement === WINDOW_PLACEMENT.FOUR_CORNERS;
  }
}
