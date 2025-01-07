import { CheckRoleService } from './services/check-role/check-role.service';
  import { Component, HostListener, OnInit } from '@angular/core';
  import { Router, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './components/headerfooter/header/header.component';
  import { FooterComponent } from './components/headerfooter/footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent , CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

  })

  export class AppComponent {

    constructor(private router : Router) {}

    title = 'Hunters_league_front';

    showScrollToTop = false;

    @HostListener('window:scroll', [])
    onScroll(): void {
      const scrolledPastFirstScreen = window.scrollY > window.innerHeight;
      this.showScrollToTop = scrolledPastFirstScreen;
    }

    scrollToTop(): void {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    checkHeaderFooter(): boolean {
      return !this.router.url.startsWith('/admin');
    }

}

