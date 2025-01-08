import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebare',
  standalone: true,
  imports: [RouterLink , CommonModule , RouterOutlet],
  templateUrl: './sidebare.component.html',
  styleUrl: './sidebare.component.css'
})
export class SidebareComponent {

  isClosed = true;

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }


}
