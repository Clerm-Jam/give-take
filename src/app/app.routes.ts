import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DayOneComponent } from './pages/day-one/day-one.component';
// import { SandboxComponent } from './pages/sandbox/sandbox.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dayOne',
    component: DayOneComponent,
  }
  // {
  //   path: 'sandbox',
  //   component: SandboxComponent,
  // }
];
