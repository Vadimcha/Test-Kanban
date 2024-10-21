import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(payload: { username: string }) {
    localStorage.setItem("username", payload.username)
    // return this.http.post("", payload);
  }
}
