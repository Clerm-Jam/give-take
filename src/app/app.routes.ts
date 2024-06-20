import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { DayOneComponent } from './shared/components/day-one/day-one.component';
import { GameComponent } from './pages/game/game.component';
// import { SandboxComponent } from './pages/sandbox/sandbox.component';

export const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  }
];
