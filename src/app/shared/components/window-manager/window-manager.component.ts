import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WINDOW_PLACEMENT } from '../../../constants';

@Component({
  selector: 'app-window-manager',
  standalone: true,
  inputs: ['windowPlacement'],
  imports: [CommonModule],
  templateUrl: './window-manager.component.html'
})
export class WindowManagerComponent {
  windowPlacement: WINDOW_PLACEMENT = WINDOW_PLACEMENT.NONE

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
