import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLogged: boolean = false;

  constructor() { }

  login(username: string, password: string): void {
    if (username === 'username' && password === 'password') {
      this.isLogged = true;
    }
  }

  logout(): void {
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }
}
