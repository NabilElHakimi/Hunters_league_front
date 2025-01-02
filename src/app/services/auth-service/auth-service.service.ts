import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {


  constructor(private http: HttpClient, private router: Router) {}

  url = "http://localhost:8443/api/auth/"

  login(formData : FormsModule) {
      const loginUrl = this.url+"login";
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
    const registerUrl = this.url+"register";
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
