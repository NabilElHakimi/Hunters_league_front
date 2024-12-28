  import { Component, OnInit } from '@angular/core';
  import { Router, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './components/headerfooter/header/header.component';
  import { FooterComponent } from './components/headerfooter/footer/footer.component';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Hunters_league_front';

  }
