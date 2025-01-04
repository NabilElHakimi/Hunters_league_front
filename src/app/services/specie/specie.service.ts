import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';
import { PopupService } from '../popup-service/popup.service';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {

  constructor(private httpClient: HttpClient, private router: Router, private popupService: PopupService) {}

  getSpecies(page: number, size: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/species/list?page=${page}&size=${size}`).pipe(
      catchError((error) => {
        if (error.status === 403) {
          this.popupService.showErrorPopup('Access Denied',' \n Please login.')
            .then(() => {
              localStorage.removeItem('authToken');
              this.router.navigate(['/login']);
            });
        }
        throw error;
      })
    );
  }
}
