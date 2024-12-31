import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.css'
})
export class WelcomeCardComponent {

  scrollByHalf(): void {
    const screenHeight = window.innerHeight; // Get the screen height dynamically
    window.scrollBy({
      top: 500, // Scroll down 50% of the screen height
      behavior: 'smooth' // Smooth scrolling effect
    });
  }
}
