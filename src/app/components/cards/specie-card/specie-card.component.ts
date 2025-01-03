import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

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

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    if (this.isLoading || (this.totalPages > 0 && this.currentPage >= this.totalPages)) {
      return;
    }

    this.isLoading = true;

    this.httpClient
      .get(environment.apiUrl + `/species/list?page=${this.currentPage}&size=${this.pageSize}`)
      .subscribe(
        (response: any) => {
          this.speciesList = [...this.speciesList, ...response.content];
          this.totalPages = response.totalPages;
          this.currentPage++;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;

          // Vérifier si l'erreur est un 403 Forbidden
          if (error.status === 403) {
            console.warn('Access denied. Redirecting to login page...');
            this.router.navigate(['/login']); // Redirige vers la page de connexion
          } else {
            console.error('Error fetching speciesList:', error);
          }
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
