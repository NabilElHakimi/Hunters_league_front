import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-card',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './competition-card.component.html',
  styleUrl: './competition-card.component.css'
})
export class CompetitionCardComponent implements OnInit {
  httpClient = inject(HttpClient);
  competitions :any[] = [];

  ngOnInit(): void {
     this.fetchData();
  }

  fetchData(){
    this.httpClient.get('http://localhost:8443/api/competition/details').subscribe((competitions : any)=> {
      console.log(competitions);
      this.competitions = competitions.content;
    })
  }

}
