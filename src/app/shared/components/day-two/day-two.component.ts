import { Component } from '@angular/core';
import { WindowManagerComponent } from '../window-manager/window-manager.component';
import { WindowsComponent } from '../windows/windows.component';
import { WINDOW_PLACEMENT } from '../../../constants';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { TodoAppComponent } from '../../todo-app/todo-app.component';
import { PerformanceTrackerComponent } from '../../performance-tracker/performance-tracker.component';
import { VirtualStudioComponent } from '../../virtual-studio/virtual-studio.component';
import { NileComComponent } from '../nileDotCom/nileDotCom.component';

@Component({
  selector: 'app-day-two',
  standalone: true,
  imports: [WindowManagerComponent, WindowsComponent, ToolbarComponent, TodoAppComponent, PerformanceTrackerComponent, VirtualStudioComponent, NileComComponent],
  templateUrl: './day-two.component.html',
})
export class DayTwoComponent {
  windowPlacement: WINDOW_PLACEMENT = WINDOW_PLACEMENT.FOUR_CORNERS;
}
