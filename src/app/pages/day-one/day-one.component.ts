import { Component, WritableSignal, inject } from '@angular/core';
import { WindowsComponent } from '../../shared/components/windows/windows.component';
import { SimplebtnComponent } from '../../shared/components/simplebtn/simplebtn.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { WindowManagerComponent } from '../../shared/components/window-manager/window-manager.component';
import { WINDOW_PLACEMENT } from '../../constants';
import { PerformanceTrackerComponent } from '../../shared/performance-tracker/performance-tracker.component';
import { TodoAppComponent } from '../../shared/todo-app/todo-app.component';
import { VirtualStudioComponent } from '../../shared/virtual-studio/virtual-studio.component';

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
    VirtualStudioComponent
  ],
  templateUrl: './day-one.component.html',
  styleUrl: './day-one.component.css',
})
export class DayOneComponent {
  windowPlacement = WINDOW_PLACEMENT.BIG_LEFT;


}
