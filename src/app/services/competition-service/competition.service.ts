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
      showCancelButton: true,
      confirmButtonText: 'Yes, participate!',
      cancelButtonText: 'No, cancel',
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
              confirmButtonText: 'OK',
            });
          },
          (error) => {
            const errorMessage = error?.error || 'An unexpected error occurred.';
            Swal.fire({
              icon: 'error',
              title: 'Failed to participate',
              text: errorMessage,
              confirmButtonText: 'OK',
            });
            console.error('Error while participating in competition:', error);
          }
        );
      }
    });
  }
}
