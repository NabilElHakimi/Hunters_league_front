import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class CheckRoleService {

  constructor() {}

  checkRole(role: string): boolean {

    const token = localStorage.getItem('authToken');

    if (!token) {
      return false;
    }

    const decodedToken = jwtDecode(token);
    return this.hasRole(decodedToken, role);
  }

  private hasRole(decodedToken: any, role: string): boolean {
    return (
      decodedToken.roles?.some(
        (r: { authority: string }) => r.authority === 'ROLE_' + role
      ) || false
    );
  }

}
