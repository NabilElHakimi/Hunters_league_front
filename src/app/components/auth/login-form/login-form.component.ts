import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule , RouterLink],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {

  constructor(private http :HttpClient , private router :Router){}

  service : AuthServiceService  = new AuthServiceService (this.http , this.router);

  onSubmit(formData: any) {
    console.log(formData)
    this.service.login(formData);
  }

}
