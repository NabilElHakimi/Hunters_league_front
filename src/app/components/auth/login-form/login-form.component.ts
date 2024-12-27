import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink , HttpClientModule , FormsModule , CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private http : HttpClient){}

  onSubmit(formData : any){
    console.log('Form Data' , formData)
    let url = 'http://localhost:8443/api/auth/login'
    this.http.post(url , formData).subscribe({
        next : (response) => {
          console.log('Login successful' , response)
          alert('Login successful')
        },
        error : (error) => {
          console.error('Login')
          alert('Login failed. Please try again')
        }
    })

  }


}
