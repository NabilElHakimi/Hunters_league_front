// src/app/specie-card/specie-card.component.ts

import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeciesService } from '../../../services/specie/specie.service';

@Component({
  selector: 'app-specie-card',
  standalone: true,
  imports: [],
  templateUrl: './specie-card.component.html',
  styleUrls: ['./specie-card.component.css'],
})
export class SpecieCardComponent implements OnInit {
  speciesList: any[] = [];
  currentPage = 0;
  pageSize = 9;
  totalPages = 0;
  isLoading = false;

  constructor(private speciesService: SpeciesService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    if (this.isLoading || (this.totalPages > 0 && this.currentPage >= this.totalPages)) {
      return;
    }

    this.isLoading = true;

    this.speciesService.getSpecies(this.currentPage, this.pageSize).subscribe(
      (response: any) => {
        console.log('Response received:', response);
        this.speciesList = [...this.speciesList, ...response.content];
        this.totalPages = response.totalPages;
        this.currentPage++;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching speciesList:', error);
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
