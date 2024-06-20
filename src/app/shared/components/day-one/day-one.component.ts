import { Component, WritableSignal, inject } from '@angular/core';
import { WindowsComponent } from '../windows/windows.component';
import { SimplebtnComponent } from '../simplebtn/simplebtn.component';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { WindowManagerComponent } from '../window-manager/window-manager.component';
import { WINDOW_PLACEMENT } from '../../../constants';
import { PerformanceTrackerComponent } from '../../performance-tracker/performance-tracker.component';
import { TodoAppComponent } from '../../todo-app/todo-app.component';
import { VirtualStudioComponent } from '../../virtual-studio/virtual-studio.component';

@Component({
  selector: 'app-day-one',
  standalone: true,
  imports: [
    SimplebtnComponent,
    WindowsComponent,
    ToolbarComponent,
    WindowManagerComponent,
    PerformanceTrackerComponent,
    TodoAppComponent,
    VirtualStudioComponent,
  ],
  templateUrl: './day-one.component.html',
  styleUrl: './day-one.component.css',
})
export class DayOneComponent {
  windowPlacement = WINDOW_PLACEMENT.BIG_LEFT;


}
