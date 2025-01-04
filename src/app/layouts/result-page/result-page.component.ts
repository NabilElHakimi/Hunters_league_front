import { Component } from '@angular/core';
import { CompetitionCardComponent } from "../../components/cards/competition-card/competition-card.component";
import { ResultCardComponent } from "../../components/cards/result-card/result-card.component";

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [ResultPageComponent, CompetitionCardComponent, ResultCardComponent],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent {

}
