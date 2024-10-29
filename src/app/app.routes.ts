import { Routes } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {KanbanPageComponent} from './pages/kanban-page/kanban-page.component';
import {NoAuthGuard} from './middleware/no-auth.guard';
import {AuthGuard} from './middleware/auth.guard';


export const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [NoAuthGuard] },
  { path: 'kanban', component: KanbanPageComponent, canActivate: [AuthGuard] }
];
