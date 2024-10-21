import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatSlideToggle, MatButton, ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  constructor(private router: Router) { }

  authService = inject(AuthService)
  form = new FormGroup({
    username: new FormControl<string>("", { nonNullable: true }),
  })
  onSubmit() {
    if(this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value);
      this.router.navigate(['/kanban'])
      console.log(this.form.value)
    }
  }
}
