import { PopupService } from './../popup-service/popup.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { CheckRoleService } from '../check-role/check-role.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

   private popupService : PopupService =  inject(PopupService);

  private checkRoleService : CheckRoleService = inject(CheckRoleService);
  constructor(private http: HttpClient, private router: Router ) {}

  login(formData: FormsModule) {
    const loginUrl = environment.apiUrl + '/auth/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http.post<{ token: string }>(loginUrl, formData, httpOptions).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.popupService.showSuccessPopup('Login successful', 'You have logged in successfully.');
        if (this.checkRoleService.checkRole('ADMIN')) {
          this.router.navigate(['/admin']);
        } else if (this.checkRoleService.checkRole('MEMBER')) {
          this.router.navigate(['/home']);
        }
      },

      error: (error) => {
        this.popupService.showErrorPopup('Login failed', 'Please check your credentials.');
      },
    });
  }

  register(formData: FormsModule) {
    const registerUrl = environment.apiUrl + '/auth/register';
    this.http.post<{ token: string }>(registerUrl, formData).subscribe({
      next: (response) => {
        this.login(formData);
        localStorage.setItem('authToken', response.token);
        this.popupService.showSuccessPopup('Registration successful', 'You have registered successfully.');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.popupService.showErrorPopup('Registration failed', 'Please check your credentials.');
      },
    });
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

}
