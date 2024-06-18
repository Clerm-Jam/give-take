import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { LoginComponent } from './pages/login/login.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'sandbox',
    component: SandboxComponent,
  }
];
