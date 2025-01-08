import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebare',
  standalone: true,
  imports: [RouterLink , CommonModule],
  templateUrl: './sidebare.component.html',
  styleUrl: './sidebare.component.css'
})
export class SidebareComponent {

  isClosed = false;

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }

}
