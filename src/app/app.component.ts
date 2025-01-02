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
    title = 'Hunters_league_front';

    showScrollToTop = false; // Flag to control button visibility

    @HostListener('window:scroll', [])
    onScroll(): void {
      // Check if scrolled past 100% of the viewport height
      const scrolledPastFirstScreen = window.scrollY > window.innerHeight;
      this.showScrollToTop = scrolledPastFirstScreen; // Show button only if scrolled past the first screen
    }

    // Scroll to the top of the page
    scrollToTop(): void {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
      });
    }

  }
