import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specie-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './specie-card.component.html',
  styleUrls: ['./specie-card.component.css'],
})
export class SpecieCardComponent implements OnInit {
  speciesList: any[] = [];
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
      .get(`http://localhost:8443/api/species/list?page=${this.currentPage}&size=${this.pageSize}`)
      .subscribe(
        (response: any) => {
          this.speciesList = [...this.speciesList, ...response.content];
          this.totalPages = response.totalPages;
          this.currentPage++;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching speciesList:', error);
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
