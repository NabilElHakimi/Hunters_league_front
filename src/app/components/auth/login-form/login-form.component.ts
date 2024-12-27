import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(formData: any) {
    console.log('Form Data Submitted:', formData);

    const url = 'http://localhost:8443/api/auth/login';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http.post<{ token: string }>(url, formData, httpOptions).subscribe({
      next: (response) => {
        console.log('Login successful:', response);

        localStorage.setItem('authToken', response.token);

        this.router.navigate(['/home']);
        alert('Login successful');
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      },
    });
  }
}
