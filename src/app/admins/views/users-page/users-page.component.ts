import { UserService } from './../../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { LoaderAdminComponent } from '../../../components/loader-admin/loader-admin.component';
import { CompetitionCardComponent } from "../../../components/cards/competition-card/competition-card.component";
import { LoaderComponent } from "../../../components/loader/loader.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [LoaderAdminComponent , CommonModule , CommonModule , FormsModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {
  isLoading: boolean = false;
  data : any = [];
  currentPage: number = 0;
  totalPage: number = 1;
  isModalOpenAdd: boolean = true;

  constructor(private userService : UserService) {}
  ngOnInit(): void {
    this.getUsers();
    this.isLoading = false;
  }


  getUsers() {
    this.isLoading = true;
    this.userService.getUsers(this.currentPage).subscribe((res: any) => {
      this.data = res.content;
      this.totalPage = res.totalPages;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error('Erreur de récupération des utilisateurs', error);
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPage - 1) {
      this.currentPage++;
      this.getUsers();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getUsers();
    }
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 0; i < this.totalPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  loadPage(page: number) {
    if (page >= 0 && page < this.totalPage) {
      this.currentPage = page;
      this.getUsers();
    }
  }


}
