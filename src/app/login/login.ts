import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';

  constructor(private authService: Auth, private router: Router) { }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login(this.username);
      this.router.navigate(['/user']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}
