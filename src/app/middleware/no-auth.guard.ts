import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      return true;
    } else {
      console.log("You're already authorized")
      this.router.navigate(['/kanban'])
      return false;
    }
  }
}
