import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
];
