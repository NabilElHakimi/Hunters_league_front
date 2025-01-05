import { Component, OnInit } from '@angular/core';
import { TopThreeService } from '../../../services/top-three/top-three.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-three.component.html',
  styleUrls: ['./top-three.component.css']  // Fix: 'styleUrls' not 'styleUrl'
})
export class TopThreeComponent implements OnInit {

  // Variable pour stocker les données
  data = [
    { user: null, competitions: null },
    { user: null, competitions: null },
    { user: null, competitions: null }
  ];

  constructor(private topTreeService: TopThreeService) {}

  ngOnInit(): void {
    this.getTopThree();
  }

  getTopThree(): void {
    this.topTreeService.getTopThree().subscribe(
      (response : any) => {
        this.data = response;
        console.log('Top 3 data:', this.data);
      },
      (error) => {
        console.error('Error fetching top 3:', error);
      }
    );
  }
}
