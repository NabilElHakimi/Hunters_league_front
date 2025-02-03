import { createAction, props } from '@ngrx/store';

export const loadCompetitions = createAction(
  '[Competition] Load Competitions',
  props<{ page: number; pageSize: number }>()
);

export const loadCompetitionsSuccess = createAction(
  '[Competition] Load Competitions Success',
  props<{ competitions: any[], totalPages: number }>()
);

export const loadCompetitionsFailure = createAction(
  '[Competition] Load Competitions Failure',
  props<{ error: string }>()
);
