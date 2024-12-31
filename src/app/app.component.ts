  import { Component, OnInit } from '@angular/core';
  import { Router, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './components/headerfooter/header/header.component';
  import { FooterComponent } from './components/headerfooter/footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true, 
      },
    ],
  })
  export class AppComponent {
    title = 'Hunters_league_front';

  }
