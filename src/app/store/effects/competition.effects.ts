import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as CompetitionActions from '../actions/competition.actions';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class CompetitionEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadCompetitions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompetitionActions.loadCompetitions),
      mergeMap(action =>
        this.http.get(`${environment.apiUrl}/competition/details?page=${action.page}&size=${action.pageSize}`).pipe(
          map((response: any) =>
            CompetitionActions.loadCompetitionsSuccess({ competitions: response.content, totalPages: response.totalPages })
          ),
          catchError(error => of(CompetitionActions.loadCompetitionsFailure({ error: error.message })))
        )
      )
    )
  );
}
