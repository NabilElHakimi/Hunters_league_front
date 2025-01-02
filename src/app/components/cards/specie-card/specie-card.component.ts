import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-specie-card',
  standalone: true, // Mark as standalone
  imports: [CommonModule, HttpClientModule], // Required dependencies
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

    // Retrieve token from localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('No auth token found in localStorage. Unable to fetch species list.');
      this.isLoading = false;
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.httpClient
      .get(`http://localhost:8443/api/species/list?page=${this.currentPage}&size=${this.pageSize}`, { headers })
      .subscribe(
        (response: any) => {
          console.log('Response:', response);
          if (response && response.content) {
            this.speciesList = [...this.speciesList, ...response.content];
            this.totalPages = response.totalPages;
            this.currentPage++;
          } else {
            console.warn('Unexpected response format:', response);
          }
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching speciesList:', error);

          // Specific error handling
          if (error.status === 403) {
            console.error('403 Forbidden: Check if the token is valid and has the correct permissions.');
          } else if (error.status === 401) {
            console.error('401 Unauthorized: Token is invalid or expired.');
          } else {
            console.error('An unexpected error occurred.');
          }

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
