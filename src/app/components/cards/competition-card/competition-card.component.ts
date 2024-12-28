import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-card',
  standalone: true, // Mark as standalone
  imports: [CommonModule, HttpClientModule], // Required dependencies
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.css'],
})
export class CompetitionCardComponent implements OnInit {
  competitions: any[] = [];
  currentPage = 0;
  pageSize = 9;
  totalPages = 0;
  isLoading = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    if (this.isLoading || (this.totalPages > 0 && this.currentPage >= this.totalPages)) {
      return;
    }

    this.isLoading = true;

    this.httpClient
      .get(`http://localhost:8443/api/competition/details?page=${this.currentPage}&size=${this.pageSize}`)
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
}
