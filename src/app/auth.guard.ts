import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const decodedToken = jwtDecode(token);
    if (!decodedToken || !this.hasMemberRole(decodedToken)) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  private hasMemberRole(decodedToken: any): boolean {
    return decodedToken.roles?.some((role: { authority: string }) => role.authority === 'ROLE_MEMBER') || false;
  }
}
