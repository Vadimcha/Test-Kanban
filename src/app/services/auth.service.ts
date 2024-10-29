import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {
  }
  login(payload: { username: string }) {
    localStorage.setItem("username", payload.username)
    this.router.navigate(["/kanban"])
  }
  isLoggedIn() {
    return localStorage.getItem("username") && localStorage.getItem("username") != 'default';
  }
  logout() {
    localStorage.removeItem("username")
    this.router.navigate([""])
  }
}
