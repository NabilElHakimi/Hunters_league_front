import { PopupService } from './../../../../services/popup-service/popup.service';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private popupService : PopupService , private service : AuthServiceService) { }

  logout() : void{
    this.popupService.showConfirmationPopup('Logout' ,  'Are you sure you want to logout?' ).then((result) => {
        if(result.isConfirmed){
            this.service.logout();
        }
    });
  }

}
