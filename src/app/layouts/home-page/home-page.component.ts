import { Component } from '@angular/core';
import { CompetitionCardComponent } from '../../components/cards/competition-card/competition-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CompetitionCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
