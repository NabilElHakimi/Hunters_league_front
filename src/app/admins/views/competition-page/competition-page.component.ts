import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionService } from '../../services/competition-service/competition.service';

@Component({
  selector: 'app-competition-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './competition-page.component.html',
  styleUrl: './competition-page.component.css',
})
export class CompetitionPageComponent {
  constructor(private competitionService: CompetitionService) {}

  totalPage: number = 0;
  currentPage: number = 0;
  data: any = [];

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  editingIndex: number | null = null;
  editingItem: any = {};

  editItem(item: any, index: number) {
    this.editingIndex = index;
    this.editingItem = { ...item };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingItem = {};
  }

  updateItem() {
    if (this.editingIndex !== null) {
      this.data[this.editingIndex] = { ...this.editingItem };
      this.cancelEdit();
    }
  }

  deleteItem(index: number) {
    this.data.splice(index, 1);
  }

  // Pagination Methods
  loadPage(page: number) {
    this.competitionService.getCompetitions(page).subscribe((d: any) => {
      this.data = d.content;
      this.totalPage = d.totalPages;
      this.currentPage = d.pageable.pageNumber;
    });
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.loadPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPage - 1) {
      this.loadPage(this.currentPage + 1);
    }
  }

  getPages() {
    const pages = [];
    const totalPages = this.totalPage;
    const windowSize = 5; 

    const startPage = Math.max(this.currentPage - 2, 0);
    const endPage = Math.min(this.currentPage + 2, totalPages - 1);

    if (endPage - startPage < windowSize - 1) {
      if (startPage === 0) {
        for (let i = startPage; i < windowSize; i++) {
          pages.push(i);
        }
      } else if (endPage === totalPages - 1) {
        for (let i = totalPages - windowSize; i <= endPage; i++) {
          pages.push(i);
        }
      } else {
        pages.push(...Array.from({ length: windowSize }, (_, i) => i + (this.currentPage - 2)));
      }
    } else {
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  }


}