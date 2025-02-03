import { createReducer, on } from '@ngrx/store';
import * as CompetitionActions from '../actions/competition.actions';

export interface CompetitionState {
  competitions: any[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}

export const initialState: CompetitionState = {
  competitions: [],
  totalPages: 0,
  isLoading: false,
  error: null
};

export const competitionReducer = createReducer(
  initialState,
  on(CompetitionActions.loadCompetitions, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(CompetitionActions.loadCompetitionsSuccess, (state, { competitions, totalPages }) => ({
    ...state,
    competitions: [...state.competitions, ...competitions],
    totalPages,
    isLoading: false
  })),
  on(CompetitionActions.loadCompetitionsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
