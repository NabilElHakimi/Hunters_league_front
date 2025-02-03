import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebare',
  standalone: true,
  imports: [RouterLink , CommonModule , RouterOutlet],
  templateUrl: './sidebare.component.html',
  styleUrl: './sidebare.component.css'
})
export class SidebareComponent implements OnInit {

  isClosed = false;

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }

  ngOnInit(): void {
    if(!this.isClosed)
    {
      this.toggleSidebar();
    }
  }

}
