import { CheckRoleService } from './../services/check-role/check-role.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JuryGuard implements CanActivate {

  constructor(private router: Router , private checkRoleService : CheckRoleService ) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.checkRoleService.checkRole('JURY')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
