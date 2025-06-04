import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticatedUser = false;
  private userRole: 'admin' | 'user' | null = null;

  constructor(private router: Router) {}

  login(user: { email: string; password: string; role: 'admin' | 'user' }) {
    this.isAuthenticatedUser = true;
    this.userRole = user.role;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.isAuthenticatedUser = false;
    this.userRole = null;
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  getRole(): 'admin' | 'user' | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  }
}
