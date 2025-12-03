import { Component } from '@angular/core';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
})
export class UserComponent {

  constructor(public auth: Auth) {}
}
