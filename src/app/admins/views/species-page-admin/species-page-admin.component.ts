import { Component } from '@angular/core';
import { PopupService } from '../../../services/popup-service/popup.service';
import { CommonModule } from '@angular/common';
import { LoaderAdminComponent } from '../../../components/loader-admin/loader-admin.component';
import { FormsModule } from '@angular/forms';
import { SpeciesServiceAdminService } from '../../services/species-service/species-service-admin.service';

@Component({
  selector: 'app-species-page-admin',
  standalone: true,
  imports: [CommonModule , FormsModule, LoaderAdminComponent],
  templateUrl: './species-page-admin.component.html',
  styleUrl: './species-page-admin.component.css'
})
export class SpeciesPageAdminComponent {
constructor(private speciesService: SpeciesServiceAdminService , private popup : PopupService) {}

  totalPage: number = 0;
  currentPage: number = 0;
  data: any = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
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

  loadPage(page: number) {
    this.speciesService.getCompetitions(page).subscribe((d: any) => {
      this.data = d.content;
      this.totalPage = d.totalPages;
      this.currentPage = d.pageable.pageNumber;
      this.isLoading = false;
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



  confirmDeleteItem(index: number) {
    this.popup.showConfirmationPopup('Delete' ,'Are you sure you want to delete this item?' ).then((confirmed) => {
      if (confirmed.isConfirmed) {
        this.deleteItem(index);
      }
    }
    );
  }


  isModalOpen = false;
  isModalOpenAdd = false;

  closeModal() {
    this.isModalOpen = false;
    console.log('close modal');
  }
  closeModalAdd() {
    this.isModalOpenAdd = false;
    console.log('close modal');
  }

  items_for_update: any = {};

  chargeModale(item: any) {
    this.isModalOpen = true;
    this.items_for_update = { ...item };
     console.log(this.items_for_update);
  }



  // updateCompetition(formData: any, id: string) {
  //   this.speciesService.updateCompetition(formData, id).subscribe(
  //     (response: any) => {
  //       this.closeModal();
  //       this.popup.showSuccessPopup('Success', 'Competition updated successfully');
  //       this.loadPage(this.currentPage);
  //     },
  //     (error) => {
  //       this.popup.showErrorPopup('Error', 'Failed to update competition');
  //       this.closeModal();
  //       console.error('Error updating competition:', error);
  //     }
  //   );
  // }

  // createCompetition(formData: any) {
  //   this.speciesService.createCompetition(formData).subscribe(
  //     (response: any) => {
  //       this.closeModalAdd();
  //       this.popup.showSuccessPopup('Success', 'Competition created successfully');
  //       this.loadPage(this.currentPage);
  //     },
  //     (error) => {
  //       this.popup.showErrorPopup('Error', 'Failed to create competition');
  //       this.closeModalAdd();
  //       console.error('Error creating competition:', error);
  //     }

  //   );
  // }

}
