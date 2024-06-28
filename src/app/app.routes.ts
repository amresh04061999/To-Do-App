import { Routes } from '@angular/router';
import { DashboardComponent } from './task-manage/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskComponent } from './task-manage/task/task.component';
import { EventComponent } from './task-manage/event/event.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ForgotPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'task',
    component: TaskComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
