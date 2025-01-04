import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  // Méthode pour afficher un popup de confirmation (comme avant)
  showConfirmationPopup(
    title: string,
    text: string,
    confirmButtonText: string = 'Yes, proceed!',
    cancelButtonText: string = 'No, cancel',
    confirmButtonColor: string = '#4caf50', // couleur verte
    cancelButtonColor: string = '#f44336'  // couleur rouge
  ) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      background: '#2c2f36',
      color: '#fff',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor,
      cancelButtonColor,
      customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        cancelButton: 'swal-cancel-button',
        popup: 'swal-popup',
      },
    });
  }

  // Méthode pour afficher une popup de question (oui/non)
  showQuestionPopup(
    question: string,
    confirmButtonText: string = 'Yes',
    cancelButtonText: string = 'No',
    confirmButtonColor: string = '#4caf50',
    cancelButtonColor: string = '#f44336'
  ) {
    return Swal.fire({
      title: 'Question',
      text: question,
      icon: 'question',
      background: '#2c2f36',
      color: '#fff',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor,
      cancelButtonColor,
      customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        cancelButton: 'swal-cancel-button',
        popup: 'swal-popup',
      },
    });
  }

  // Méthode pour afficher une popup de succès
  showSuccessPopup(
    title: string,
    text: string,
    confirmButtonText: string = 'OK',
    confirmButtonColor: string = '#4caf50'
  ) {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      background: '#2c2f36',
      color: '#fff',
      confirmButtonText,
      confirmButtonColor,
      customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        popup: 'swal-popup',
      },
    });
  }

  // Méthode pour afficher une popup d'erreur
  showErrorPopup(
    title: string,
    text: string,
    confirmButtonText: string = 'OK',
    confirmButtonColor: string = '#f44336'
  ) {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      background: '#2c2f36',
      color: '#fff',
      confirmButtonText,
      confirmButtonColor,
      customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        popup: 'swal-popup',
      },
    });
  }
}
