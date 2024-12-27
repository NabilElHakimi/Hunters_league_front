  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { RouterLink } from '@angular/router';
  import { HttpClient, HttpClientModule } from '@angular/common/http';

  @Component({
    selector: 'app-register-form',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterLink , HttpClientModule],
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
  })
  export class RegisterFormComponent {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
      this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        cin: ['', Validators.required],
        nationality: ['', Validators.required],
      });
    }

    onSubmit() {
      if (this.registerForm.valid) {
        const formData = this.registerForm.value;

        this.http.post('http://localhost:8443/api/auth/register', formData)
          .subscribe({
            next: (response) => {
              console.log('Registration successful:', response);
              alert('Registration successful!');
            },
            error: (error) => {
              console.error('Registration failed:', error);
              alert('Registration failed. Please try again.');
            }
          });
      } else {
        console.error('Form is invalid');
        alert('Please fill out the form correctly.');
      }
    }
  }
