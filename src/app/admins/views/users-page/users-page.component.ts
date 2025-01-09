import { PopupService } from './../../../services/popup-service/popup.service';
import { UserService } from './../../services/user-service/user.service';
import { Component, inject, OnInit } from '@angular/core';
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

  popupService : PopupService = inject(PopupService);
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
    const maxVisiblePages = 5;
    const pages = [];

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(this.currentPage - half, 0);
    let end = start + maxVisiblePages;

    if (end > this.totalPage) {
      end = this.totalPage;
      start = Math.max(end - maxVisiblePages, 0);
    }

    for (let i = start; i < end; i++) {
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

  deleteUser(item: any) {
    console.log('Delete user', item);
    this.popupService.showConfirmationPopup(item.firstName + " " + item.lastName , 'Are you sure you want to delete this user?')
      .then((result) => {
        if (result.isConfirmed) {
          this.userService.deleteUser(item.id).subscribe(() => {
            this.getUsers();
            this.popupService.showSuccessPopup(item.firstName + " " + item.lastName , 'Deleted successfully');
          }, error => {
            console.error('Failed to delete', error);
          });
        }
      });
  }

}
