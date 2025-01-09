import { CheckRoleService } from './../services/check-role/check-role.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MemberGuard implements CanActivate {
  constructor(private router: Router, private checkRoleService: CheckRoleService) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.checkRoleService.checkRole('MEMBER') || this.checkRoleService.checkRole('ADMIN') || this.checkRoleService.checkRole('JYRY')) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
