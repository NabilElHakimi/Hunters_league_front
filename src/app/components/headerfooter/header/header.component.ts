import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  checkTocken(): boolean {
    // const path = this.router.url;
    // console.log(path);
    if(localStorage.getItem('authToken') !== null) {
        // console.log(localStorage.getItem('authToken'));
        // console.log('false');
        // return path === '/login' || path === '/register';
        return false;
      }
      console.log('false');
      return true;
  }

    logout() : void{
          localStorage.removeItem('authToken');
          this.router.navigate(['/login']);
        }

}
