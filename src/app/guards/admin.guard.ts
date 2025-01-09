import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CheckRoleService } from '../services/check-role/check-role.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router , private checkRoleService : CheckRoleService ) {}

    canActivate(): boolean {
      const token = localStorage.getItem('authToken');

      if (!token) {
        this.router.navigate(['/login']);
        return false;
      }

      if (this.checkRoleService.checkRole('ADMIN')) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

}
