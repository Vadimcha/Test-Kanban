import { Routes } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {KanbanPageComponent} from './pages/kanban-page/kanban-page.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'kanban', component: KanbanPageComponent }
];
