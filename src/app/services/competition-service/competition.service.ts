import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient) {}

  participate(competitionId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to participate in this competition?',
      icon: 'warning',
      background: '#2c2f36', // Dark background for dark mode
      color: '#fff', // Light text color
      showCancelButton: true,
      confirmButtonText: 'Yes, participate!',
      cancelButtonText: 'No, cancel',
      confirmButtonColor: '#4caf50', // Green button color for confirmation
      cancelButtonColor: '#f44336', // Red cancel button color
      customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button',
        cancelButton: 'swal-cancel-button',
        popup: 'swal-popup', // Added for popup styling if needed
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const body = { competitionId };

        // Now we don't add the Authorization header here. The interceptor will take care of it.
        this.http.post(`${environment.apiUrl}/participation/create`, body).subscribe(
          (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Participation successful!',
              text: 'You have successfully registered for the competition.',
              background: '#2c2f36', // Dark background
              color: '#fff', // Light text
              confirmButtonText: 'OK',
              confirmButtonColor: '#4caf50', // Green button
              customClass: {
                title: 'swal-title',
                confirmButton: 'swal-button',
                popup: 'swal-popup', // Added for popup styling if needed
              },
            });
          },
          (error) => {
            const errorMessage = error?.error || 'An unexpected error occurred.';
            Swal.fire({
              icon: 'error',
              title: 'Failed to participate',
              text: errorMessage,
              background: '#2c2f36', // Dark background
              color: '#fff', // Light text
              confirmButtonText: 'OK',
              confirmButtonColor: '#f44336', // Red button for errors
              customClass: {
                title: 'swal-title',
                confirmButton: 'swal-button',
                popup: 'swal-popup', // Added for popup styling if needed
              },
            });
            console.error('Error while participating in competition:', error);
          }
        );
      }
    });
  }
}
