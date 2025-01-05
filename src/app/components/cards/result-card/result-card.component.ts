import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResutlsService } from '../../../services/results-service/resutls.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [CommonModule , LoaderComponent],
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  isLoading = true;
  pastCompetitions: any[] = [];

  constructor(private http: HttpClient, private router: Router, private resultService: ResutlsService) { }

  getResults() {
    console.log("getResults");
    this.resultService.getResults().subscribe((data: any) => {
      this.pastCompetitions = data.competitions;
      console.log(this.pastCompetitions);
      this.isLoading = false;
    });
  }

  trackByCompetitionId(index: number, competition: any): any {
    return competition.id;
  }

  ngOnInit(): void {
    this.getResults();
  }
}
