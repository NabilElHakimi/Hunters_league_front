import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionService } from '../../services/competition-service/competition.service';

@Component({
  selector: 'app-competition-page',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './competition-page.component.html',
  styleUrl: './competition-page.component.css'
})
export class CompetitionPageComponent {



  constructor(private competitionService : CompetitionService) { }

    totalPage : number = 0
    currentPage : number = 0
    data : any = []

    ngOnInit(): void {
      this.competitionService.getCompetitions(this.currentPage).subscribe((d : any) => {
        this.data = d.content
        this.totalPage = d.totalPages
        this.currentPage = d.pageable.pageNumber
        // console.log(d)
      });
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

}
