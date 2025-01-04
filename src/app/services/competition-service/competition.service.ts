import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {


  constructor(private http : HttpClient) { }

  participate(competitionId: string) {
    const token = localStorage.getItem('authToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const body = { competitionId };

    this.http.post(`${environment.apiUrl}/participation/create`, body, { headers }).subscribe(
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


}
