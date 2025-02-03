import { Component, HostListener, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompetitionState } from '../../../store/reducers/competition.reducer';
import * as CompetitionActions from '../../../store/actions/competition.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.css'],
})
export class CompetitionCardComponent implements OnInit {

  competitions$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  currentPage = 0;
  pageSize = 9;

  constructor(private store: Store<{ competition: CompetitionState }>) {
    this.competitions$ = this.store.pipe(select(state => state.competition.competitions));
    this.isLoading$ = this.store.pipe(select(state => state.competition.isLoading));
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(CompetitionActions.loadCompetitions({ page: this.currentPage, pageSize: this.pageSize }));
    this.currentPage++;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if user has scrolled to the bottom and is not loading new data.
    this.isLoading$.subscribe(isLoading => {
      if (scrollPosition >= documentHeight - 100 && !isLoading) {
        this.fetchData();
      }
    });
  }

  participate(competitionId: string) {
    console.log('Participating in competition:', competitionId);
  }
}
