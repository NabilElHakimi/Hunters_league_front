import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service/auth-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PopupService } from '../../../services/popup-service/popup.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , CommonModule , HttpClientModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router , private http : HttpClient ,  private popupService : PopupService) {}
  service : AuthServiceService = new AuthServiceService(this.http , this.router);

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

        this.popupService.showConfirmationPopup('Logout' ,  'Are you sure you want to logout?' ).then((result) => {
            if(result.isConfirmed){
                this.service.logout();
            }
        });
  }
}
