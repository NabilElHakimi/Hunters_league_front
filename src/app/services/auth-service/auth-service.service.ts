import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {


  constructor(private http: HttpClient, private router: Router) {}

  login(formData : FormsModule) {
      const loginUrl = environment.apiUrl +"/auth/login";
      console.log(loginUrl);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };


    this.http.post<{ token: string }>(loginUrl, formData, httpOptions).subscribe({
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


  register(formData : FormsModule) {
    const registerUrl = environment.apiUrl +"/auth/register";
    console.log(registerUrl);


    this.http.post<{ token: string }>(registerUrl, formData).subscribe({
      next: (response) => {
        this.login(formData);
        console.log('Registration successful:', response);
        localStorage.setItem('authToken', response.token);

        this.router.navigate(['/home']);
        alert('Registration successful');
      },
      error: (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please check your credentials.');
      },
    });

  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

}
