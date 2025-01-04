import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { PopupService } from '../popup-service/popup.service';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient, private popupService: PopupService) {}

  participate(competitionId: string) {
    this.popupService
      .showQuestionPopup('Are you sure you want to participate in this competition?')
      .then((result) => {
        if (result.isConfirmed) {
          const body = { competitionId };

          this.http.post(`${environment.apiUrl}/participation/create`, body).subscribe(
            (response: any) => {
              const successMessage = response?.message || 'You have successfully registered for the competition.';
              this.popupService.showSuccessPopup('Participation successful!', successMessage);
            },
            (error) => {
              const errorMessage = error?.error?.message || 'An unexpected error occurred.';
              this.popupService.showErrorPopup('Failed to participate', errorMessage);
              console.error('Error while participating in competition:', error);
            }
          );
        } else {
          console.log('Participation was canceled');
        }
      });
  }
}
