import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isAuthenticated = false; // You can set this based on your authentication logic
  username: string | null = null;

  constructor() { }

  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }

  login(username: string) {
    this.isAuthenticated = true;
    this.username = username;
  }

  logout() {
    this.isAuthenticated = false;
    this.username = null;
  }
}
