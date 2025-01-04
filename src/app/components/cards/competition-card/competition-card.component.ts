import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';
import { CompetitionService } from '../../../services/competition-service/competition.service';

@Component({
  selector: 'app-competition-card',
  standalone: true, // Mark as standalone
  imports: [CommonModule, HttpClientModule],
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.css'],
})
export class CompetitionCardComponent implements OnInit {


  competitions: any[] = [];
  currentPage = 0;
  pageSize = 9;
  totalPages = 0;
  isLoading = false;

  constructor(private httpClient: HttpClient , private   competitionService : CompetitionService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    if (this.isLoading || (this.totalPages > 0 && this.currentPage >= this.totalPages)) {
      return;
    }

    this.isLoading = true;

    this.httpClient
      .get(`${environment.apiUrl}/competition/details?page=${this.currentPage}&size=${this.pageSize}`)
      .subscribe(
        (response: any) => {
          this.competitions = [...this.competitions, ...response.content];
          this.totalPages = response.totalPages;
          this.currentPage++;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching competitions:', error);
          this.isLoading = false;
        }
      );
  }

  @HostListener('window:scroll', [])
  onScroll(): void {

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 100 && !this.isLoading) {
      this.fetchData();
    }
  }

  participate(competitionId : string){
      this.competitionService.participate(competitionId);
  }

}
