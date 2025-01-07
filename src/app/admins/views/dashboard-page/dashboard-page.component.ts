import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/headersidebar/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebareComponent } from '../../components/headersidebar/sidebare/sidebare.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [HeaderComponent , RouterOutlet ,  SidebareComponent] , 
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
